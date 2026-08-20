export type Pagination = {
      page: number;
      limit: number;
      offset: number;
};

export const getPaginationMeta = (pagination: Pagination, total: number) => ({
      page: pagination.page,
      limit: pagination.limit,
      total,
      totalPages: Math.ceil(total / pagination.limit),
      hasNextPage: pagination.page * pagination.limit < total,
      hasPreviousPage: pagination.page > 1,
});
