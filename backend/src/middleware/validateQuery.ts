import { Request, Response, NextFunction } from "express";

/**
 * Validates required query string parameters (`req.query`).
 * Use this for list endpoints with pagination, e.g. `?page=1&limit=10`.
 */
export function validateQuery(...requiredParams: string[]) {
      return (req: Request, res: Response, next: NextFunction) => {
            for (const param of requiredParams) {
                  const value = req.query[param];

                  if (value === undefined || value === null || value === "") {
                        return res.status(400).json({
                              message: `${param} is required`,
                              hint: "Use & between query params, e.g. ?page=1&limit=10",
                              receivedQuery: req.query,
                        });
                  }
            }

            next();
      };
}
