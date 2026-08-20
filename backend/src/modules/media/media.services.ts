import { AppError } from "../../utils/http";
import { getPaginationMeta, Pagination } from "../../utils/pagination";
import { getAdminById } from "../admins/models/admin.queries";
import {
      countMedia,
      deleteMedia,
      getMedia,
      getMediaById,
      getMediaByStorageKey,
      insertMedia,
      mediaHasReferences,
      updateMedia,
} from "./models/media.queries";
import { CreateMediaDTO, UpdateMediaDTO } from "./media.validations";

export const createMediaService = async (data: CreateMediaDTO) => {
      if (!(await getAdminById(data.uploadedBy))) {
            throw new AppError(400, "uploadedBy must reference an existing admin");
      }

      if (await getMediaByStorageKey(data.storageKey)) {
            throw new AppError(409, "Media storageKey already exists");
      }

      return insertMedia(data);
};

export const getMediaService = async (pagination: Pagination) => {
      const [media, total] = await Promise.all([
            getMedia(pagination),
            countMedia(),
      ]);

      return {
            media,
            pagination: getPaginationMeta(pagination, total),
      };
};

export const getMediaByIdService = async (id: string) => {
      const media = await getMediaById(id);

      if (!media) {
            throw new AppError(404, "Media not found");
      }

      return media;
};

export const updateMediaService = async (
      id: string,
      data: UpdateMediaDTO,
) => {
      const media = await getMediaById(id);

      if (!media) {
            throw new AppError(404, "Media not found");
      }

      if (data.uploadedBy && !(await getAdminById(data.uploadedBy))) {
            throw new AppError(400, "uploadedBy must reference an existing admin");
      }

      if (data.storageKey && data.storageKey !== media.storageKey) {
            const existingMedia = await getMediaByStorageKey(data.storageKey);

            if (existingMedia) {
                  throw new AppError(409, "Media storageKey already exists");
            }
      }

      return updateMedia(id, data);
};

export const deleteMediaService = async (id: string) => {
      const media = await getMediaById(id);

      if (!media) {
            throw new AppError(404, "Media not found");
      }

      if (await mediaHasReferences(id)) {
            throw new AppError(
                  409,
                  "Media cannot be deleted while referenced by team members, events, or site content",
            );
      }

      await deleteMedia(id);
};
