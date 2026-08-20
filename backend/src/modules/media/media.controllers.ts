import { Request, Response } from "express";
import {
      getPagination,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      createMediaService,
      deleteMediaService,
      getMediaByIdService,
      getMediaService,
      updateMediaService,
} from "./media.services";
import { CreateMediaSchema, UpdateMediaSchema } from "./media.validations";

export const createMedia = async (req: Request, res: Response) => {
      try {
            const data = validateBody(CreateMediaSchema, req.body);
            const media = await createMediaService(data);

            return res.status(201).json({
                  success: true,
                  message: "Media created successfully",
                  media,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to create media");
      }
};

export const listMedia = async (req: Request, res: Response) => {
      try {
            const paginationQuery = getPagination(req.query);
            const { media, pagination } =
                  await getMediaService(paginationQuery);

            return res.status(200).json({
                  success: true,
                  media,
                  pagination,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to list media");
      }
};

export const getMedia = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const media = await getMediaByIdService(id);

            return res.status(200).json({
                  success: true,
                  media,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to get media");
      }
};

export const updateMedia = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const data = validateBody(UpdateMediaSchema, req.body);
            const media = await updateMediaService(id, data);

            return res.status(200).json({
                  success: true,
                  message: "Media updated successfully",
                  media,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to update media");
      }
};

export const removeMedia = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            await deleteMediaService(id);

            return res.status(200).json({
                  success: true,
                  message: "Media deleted successfully",
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to delete media");
      }
};
