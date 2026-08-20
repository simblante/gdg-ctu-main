import { Request, Response } from "express";
import {
      getPagination,
      getStringParam,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      createSiteContentService,
      deleteSiteContentService,
      getSiteContentByIdService,
      getSiteContentBySectionKeyService,
      getSiteContentListService,
      updateSiteContentService,
} from "./site-content.services";
import {
      CreateSiteContentSchema,
      UpdateSiteContentSchema,
} from "./site-content.validations";

export const createSiteContent = async (req: Request, res: Response) => {
      try {
            const data = validateBody(CreateSiteContentSchema, req.body);
            const siteContent = await createSiteContentService(data);

            return res.status(201).json({
                  success: true,
                  message: "Site content created successfully",
                  siteContent,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to create site content",
            );
      }
};

export const listSiteContent = async (req: Request, res: Response) => {
      try {
            const paginationQuery = getPagination(req.query);
            const { siteContent, pagination } =
                  await getSiteContentListService(paginationQuery);

            return res.status(200).json({
                  success: true,
                  siteContent,
                  pagination,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to list site content",
            );
      }
};

export const getSiteContent = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const siteContent = await getSiteContentByIdService(id);

            return res.status(200).json({
                  success: true,
                  siteContent,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to get site content",
            );
      }
};

export const getSiteContentBySectionKey = async (
      req: Request,
      res: Response,
) => {
      try {
            const sectionKey = getStringParam(
                  req.params.sectionKey,
                  "sectionKey",
            );
            const siteContent = await getSiteContentBySectionKeyService(
                  sectionKey,
            );

            return res.status(200).json({
                  success: true,
                  siteContent,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to get site content",
            );
      }
};

export const updateSiteContent = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const data = validateBody(UpdateSiteContentSchema, req.body);
            const siteContent = await updateSiteContentService(id, data);

            return res.status(200).json({
                  success: true,
                  message: "Site content updated successfully",
                  siteContent,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to update site content",
            );
      }
};

export const removeSiteContent = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            await deleteSiteContentService(id);

            return res.status(200).json({
                  success: true,
                  message: "Site content deleted successfully",
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to delete site content",
            );
      }
};
