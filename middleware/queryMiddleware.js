const queryMiddleware = (req, res, next) => {
  // Only run on GET /
  if (req.method !== "GET" || req.path.split("/").filter(Boolean).length > 1) {
    return next();
  }

  const {
    page = 1,
    limit = 10,
    createdBy,
    createdAt_gte,
    createdAt_lte,
    isActive,
    orderBy = "createdAt",
    order = "asc",
    query,
  } = req.query;

  req.filters = {
    ...(createdBy && { createdById: createdBy }),
    ...(isActive !== undefined && { isActive: isActive === "true" }),
    ...(createdAt_gte || createdAt_lte
      ? {
          createdAt: {
            ...(createdAt_gte && { gte: new Date(createdAt_gte) }),
            ...(createdAt_lte && { lte: new Date(createdAt_lte) }),
          },
        }
      : {}),
  };

  req.queryText = query || null;

  req.pagination = {
    skip: (parseInt(page, 10) - 1) * parseInt(limit, 10),
    take: parseInt(limit, 10),
  };

  req.sort = {
    orderBy: { [orderBy]: order.toLowerCase() === "desc" ? "desc" : "asc" },
  };

  next();
};

module.exports = queryMiddleware;
