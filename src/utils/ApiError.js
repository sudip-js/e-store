import createError from "http-errors";

export const ApiError = (status, error) => {
  const message = error instanceof Error ? error?.message : error;
  return createError(status, message);
};
