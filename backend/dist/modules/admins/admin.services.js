"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdminService = exports.updateAdminService = exports.getAdminByIdService = exports.getAdminsService = exports.createAdminService = exports.toAdminResponse = void 0;
const http_1 = require("../../utils/http");
const pagination_1 = require("../../utils/pagination");
const admin_queries_1 = require("./models/admin.queries");
const toAdminResponse = (admin) => {
    const { passwordHash: _passwordHash, ...publicAdmin } = admin;
    return publicAdmin;
};
exports.toAdminResponse = toAdminResponse;
const createAdminService = async (data) => {
    const existingAdmin = await (0, admin_queries_1.getAdminByEmail)(data.email);
    if (existingAdmin) {
        throw new http_1.AppError(409, "Admin email already exists");
    }
    const admin = await (0, admin_queries_1.insertAdmin)(data);
    return (0, exports.toAdminResponse)(admin);
};
exports.createAdminService = createAdminService;
const getAdminsService = async (pagination) => {
    const [admins, total] = await Promise.all([
        (0, admin_queries_1.getAdmins)(pagination),
        (0, admin_queries_1.countAdmins)(),
    ]);
    return {
        admins: admins.map(exports.toAdminResponse),
        pagination: (0, pagination_1.getPaginationMeta)(pagination, total),
    };
};
exports.getAdminsService = getAdminsService;
const getAdminByIdService = async (id) => {
    const admin = await (0, admin_queries_1.getAdminById)(id);
    if (!admin) {
        throw new http_1.AppError(404, "Admin not found");
    }
    return (0, exports.toAdminResponse)(admin);
};
exports.getAdminByIdService = getAdminByIdService;
const updateAdminService = async (id, data) => {
    const admin = await (0, admin_queries_1.getAdminById)(id);
    if (!admin) {
        throw new http_1.AppError(404, "Admin not found");
    }
    if (data.email && data.email !== admin.email) {
        const existingAdmin = await (0, admin_queries_1.getAdminByEmail)(data.email);
        if (existingAdmin) {
            throw new http_1.AppError(409, "Admin email already exists");
        }
    }
    const updatedAdmin = await (0, admin_queries_1.updateAdmin)(id, {
        ...data,
        updatedAt: new Date(),
    });
    return (0, exports.toAdminResponse)(updatedAdmin);
};
exports.updateAdminService = updateAdminService;
const deleteAdminService = async (id) => {
    const admin = await (0, admin_queries_1.getAdminById)(id);
    if (!admin) {
        throw new http_1.AppError(404, "Admin not found");
    }
    if (await (0, admin_queries_1.adminHasReferences)(id)) {
        throw new http_1.AppError(409, "Admin cannot be deleted while referenced by events, media, or site content");
    }
    await (0, admin_queries_1.deleteAdmin)(id);
};
exports.deleteAdminService = deleteAdminService;
