import { AppError } from "../../utils/http";
import { getPaginationMeta, Pagination } from "../../utils/pagination";
import {
      adminHasReferences,
      countAdmins,
      deleteAdmin,
      getAdminByEmail,
      getAdminById,
      getAdmins,
      insertAdmin,
      updateAdmin,
} from "./models/admin.queries";
import {
      AdminRecord,
      CreateAdminDTO,
      UpdateAdminDTO,
} from "./admin.validations";

export const toAdminResponse = (admin: AdminRecord) => {
      const { passwordHash: _passwordHash, ...publicAdmin } = admin;
      return publicAdmin;
};

export const createAdminService = async (data: CreateAdminDTO) => {
      const existingAdmin = await getAdminByEmail(data.email);

      if (existingAdmin) {
            throw new AppError(409, "Admin email already exists");
      }

      const admin = await insertAdmin(data);
      return toAdminResponse(admin);
};

export const getAdminsService = async (pagination: Pagination) => {
      const [admins, total] = await Promise.all([
            getAdmins(pagination),
            countAdmins(),
      ]);

      return {
            admins: admins.map(toAdminResponse),
            pagination: getPaginationMeta(pagination, total),
      };
};

export const getAdminByIdService = async (id: string) => {
      const admin = await getAdminById(id);

      if (!admin) {
            throw new AppError(404, "Admin not found");
      }

      return toAdminResponse(admin);
};

export const updateAdminService = async (id: string, data: UpdateAdminDTO) => {
      const admin = await getAdminById(id);

      if (!admin) {
            throw new AppError(404, "Admin not found");
      }

      if (data.email && data.email !== admin.email) {
            const existingAdmin = await getAdminByEmail(data.email);

            if (existingAdmin) {
                  throw new AppError(409, "Admin email already exists");
            }
      }

      const updatedAdmin = await updateAdmin(id, {
            ...data,
            updatedAt: new Date(),
      });

      return toAdminResponse(updatedAdmin);
};

export const deleteAdminService = async (id: string) => {
      const admin = await getAdminById(id);

      if (!admin) {
            throw new AppError(404, "Admin not found");
      }

      if (await adminHasReferences(id)) {
            throw new AppError(
                  409,
                  "Admin cannot be deleted while referenced by events, media, or site content",
            );
      }

      await deleteAdmin(id);
};
