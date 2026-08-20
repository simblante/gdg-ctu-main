import { Request, Response } from "express";
import {
      getPagination,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      createAdminService,
      deleteAdminService,
      getAdminByIdService,
      getAdminsService,
      updateAdminService,
} from "./admin.services";
import { CreateAdminSchema, UpdateAdminSchema } from "./admin.validations";

export const createAdmin = async (req: Request, res: Response) => {
      try {
            const data = validateBody(CreateAdminSchema, req.body);
            const admin = await createAdminService(data);

            return res.status(201).json({
                  success: true,
                  message: "Admin created successfully",
                  admin,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to create admin");
      }
};

export const listAdmins = async (req: Request, res: Response) => {
      try {
            const paginationQuery = getPagination(req.query);
            const { admins, pagination } =
                  await getAdminsService(paginationQuery);

            return res.status(200).json({
                  success: true,
                  admins,
                  pagination,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to list admins");
      }
};

export const getAdmin = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const admin = await getAdminByIdService(id);

            return res.status(200).json({
                  success: true,
                  admin,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to get admin");
      }
};

export const updateAdmin = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const data = validateBody(UpdateAdminSchema, req.body);
            const admin = await updateAdminService(id, data);

            return res.status(200).json({
                  success: true,
                  message: "Admin updated successfully",
                  admin,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to update admin");
      }
};

export const removeAdmin = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            await deleteAdminService(id);

            return res.status(200).json({
                  success: true,
                  message: "Admin deleted successfully",
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to delete admin");
      }
};
