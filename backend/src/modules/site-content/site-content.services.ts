import { AppError } from "../../utils/http";
import { getPaginationMeta, Pagination } from "../../utils/pagination";
import { getAdminById } from "../admins/models/admin.queries";
import { getMediaById } from "../media/models/media.queries";
import {
      countSiteContent,
      deleteSiteContent,
      getSiteContentById,
      getSiteContentBySectionKey,
      getSiteContentList,
      insertSiteContent,
      updateSiteContent,
} from "./models/site-content.queries";
import {
      CreateSiteContentDTO,
      UpdateSiteContentDTO,
} from "./site-content.validations";

const validateSiteContentReferences = async (
      data: Pick<CreateSiteContentDTO, "updatedBy"> &
            Partial<Pick<CreateSiteContentDTO, "mediaId">>,
) => {
      if (!(await getAdminById(data.updatedBy))) {
            throw new AppError(400, "updatedBy must reference an existing admin");
      }

      if (data.mediaId && !(await getMediaById(data.mediaId))) {
            throw new AppError(400, "mediaId must reference existing media");
      }
};

export const createSiteContentService = async (
      data: CreateSiteContentDTO,
) => {
      if (await getSiteContentBySectionKey(data.sectionKey)) {
            throw new AppError(409, "Site content sectionKey already exists");
      }

      await validateSiteContentReferences(data);

      return insertSiteContent({
            ...data,
            updatedAt: new Date(),
      });
};

export const getSiteContentListService = async (pagination: Pagination) => {
      const [siteContent, total] = await Promise.all([
            getSiteContentList(pagination),
            countSiteContent(),
      ]);

      return {
            siteContent,
            pagination: getPaginationMeta(pagination, total),
      };
};

export const getSiteContentByIdService = async (id: string) => {
      const content = await getSiteContentById(id);

      if (!content) {
            throw new AppError(404, "Site content not found");
      }

      return content;
};

export const getSiteContentBySectionKeyService = async (
      sectionKey: string,
) => {
      const content = await getSiteContentBySectionKey(sectionKey);

      if (!content) {
            throw new AppError(404, "Site content not found");
      }

      return content;
};

export const updateSiteContentService = async (
      id: string,
      data: UpdateSiteContentDTO,
) => {
      const content = await getSiteContentById(id);

      if (!content) {
            throw new AppError(404, "Site content not found");
      }

      if (data.sectionKey && data.sectionKey !== content.sectionKey) {
            const existingContent = await getSiteContentBySectionKey(
                  data.sectionKey,
            );

            if (existingContent) {
                  throw new AppError(
                        409,
                        "Site content sectionKey already exists",
                  );
            }
      }

      await validateSiteContentReferences(data);

      return updateSiteContent(id, {
            ...data,
            updatedAt: new Date(),
      });
};

export const deleteSiteContentService = async (id: string) => {
      const content = await getSiteContentById(id);

      if (!content) {
            throw new AppError(404, "Site content not found");
      }

      await deleteSiteContent(id);
};
