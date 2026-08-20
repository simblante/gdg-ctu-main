"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = validateParams;
/**
 * A higher-order middleware factory that validates the presence of required
 * path parameters (`req.params`) in an incoming Express request.
 *
 * * Rejects the request with a `400 Bad Request` if any specified parameter is missing.
 * * @param requiredParams - Variadic list of parameter keys expected in the URL path (e.g., 'id', 'slug').
 * * @returns An Express middleware function.
 * * @example
 * // Validates that both :userId and :postId exist in the URL
 * router.get("/users/:userId/posts/:postId", validateParams("userId", "postId"), handler);
 */
function validateParams(...requiredParams) {
    return (req, res, next) => {
        for (const param of requiredParams) {
            if (!req.params[param]) {
                return res.status(400).json({
                    message: `${param} is required`,
                });
            }
        }
        next();
    };
}
