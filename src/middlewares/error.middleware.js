const errHandler = (err, req, res, next) => {
  const statusCode = err?.status || 500;
  const message = err?.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    code: statusCode,
    message,
  });
};
export default errHandler;
