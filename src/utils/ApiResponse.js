export const ApiResponse = ({
  res = {},
  statusCode = 200,
  message = "Success",
  data = {},
}) => {
  if (!res) return;
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};
