"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginationMeta = void 0;
const getPaginationMeta = (pagination, total) => ({
    page: pagination.page,
    limit: pagination.limit,
    total,
    totalPages: Math.ceil(total / pagination.limit),
    hasNextPage: pagination.page * pagination.limit < total,
    hasPreviousPage: pagination.page > 1,
});
exports.getPaginationMeta = getPaginationMeta;
