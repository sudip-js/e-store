import { ApiError } from "../utils/ApiError.js";

export const errHandler = (err, req, res, next) => {
  const statusCode = err?.status || 500;
  const message = err?.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    code: statusCode,
    message,
  });
};

export const validationError = (schema) => async (req, _, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const error = err?.errors?.[0] || "Validation Error";
    return next(ApiError(422, error));
  }
};
