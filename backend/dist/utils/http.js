"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleControllerError = exports.getStringParam = exports.validateUuid = exports.getPagination = exports.PaginationQuerySchema = exports.validateBody = exports.AppError = void 0;
const zod_1 = require("zod");
const logger_1 = __importDefault(require("./logger"));
class AppError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const validateBody = (schema, body) => {
    const result = schema.safeParse(body);
    if (!result.success) {
        throw new AppError(400, formatZodError(result.error));
    }
    return result.data;
};
exports.validateBody = validateBody;
exports.PaginationQuerySchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).default(10),
});
const getPagination = (query) => {
    const result = exports.PaginationQuerySchema.safeParse(query);
    if (!result.success) {
        throw new AppError(400, formatZodError(result.error));
    }
    return {
        ...result.data,
        offset: (result.data.page - 1) * result.data.limit,
    };
};
exports.getPagination = getPagination;
const validateUuid = (value, field = "id") => {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (Array.isArray(value) || !uuidPattern.test(value)) {
        throw new AppError(400, `Invalid ${field}`);
    }
    return value;
};
exports.validateUuid = validateUuid;
const getStringParam = (value, field) => {
    if (Array.isArray(value) || !value) {
        throw new AppError(400, `Invalid ${field}`);
    }
    return value;
};
exports.getStringParam = getStringParam;
const handleControllerError = (res, error, message = "Internal server error") => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }
    logger_1.default.error(message, {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
    });
    return res.status(500).json({
        success: false,
        message,
    });
};
exports.handleControllerError = handleControllerError;
const formatZodError = (error) => error.issues
    .map((issue) => {
    const path = issue.path.join(".");
    return path ? `${path}: ${issue.message}` : issue.message;
})
    .join("; ");
