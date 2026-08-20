"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAdmin = exports.updateAdmin = exports.getAdmin = exports.listAdmins = exports.createAdmin = void 0;
const http_1 = require("../../utils/http");
const admin_services_1 = require("./admin.services");
const admin_validations_1 = require("./admin.validations");
const createAdmin = async (req, res) => {
    try {
        const data = (0, http_1.validateBody)(admin_validations_1.CreateAdminSchema, req.body);
        const admin = await (0, admin_services_1.createAdminService)(data);
        return res.status(201).json({
            success: true,
            message: "Admin created successfully",
            admin,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to create admin");
    }
};
exports.createAdmin = createAdmin;
const listAdmins = async (req, res) => {
    try {
        const paginationQuery = (0, http_1.getPagination)(req.query);
        const { admins, pagination } = await (0, admin_services_1.getAdminsService)(paginationQuery);
        return res.status(200).json({
            success: true,
            admins,
            pagination,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to list admins");
    }
};
exports.listAdmins = listAdmins;
const getAdmin = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const admin = await (0, admin_services_1.getAdminByIdService)(id);
        return res.status(200).json({
            success: true,
            admin,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to get admin");
    }
};
exports.getAdmin = getAdmin;
const updateAdmin = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        const data = (0, http_1.validateBody)(admin_validations_1.UpdateAdminSchema, req.body);
        const admin = await (0, admin_services_1.updateAdminService)(id, data);
        return res.status(200).json({
            success: true,
            message: "Admin updated successfully",
            admin,
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to update admin");
    }
};
exports.updateAdmin = updateAdmin;
const removeAdmin = async (req, res) => {
    try {
        const id = (0, http_1.validateUuid)(req.params.id);
        await (0, admin_services_1.deleteAdminService)(id);
        return res.status(200).json({
            success: true,
            message: "Admin deleted successfully",
        });
    }
    catch (error) {
        return (0, http_1.handleControllerError)(res, error, "Failed to delete admin");
    }
};
exports.removeAdmin = removeAdmin;
