// ==========================
// 404 Not Found Middleware
// ==========================
const notFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// ==========================
// Global Error Handler
// ==========================
const errorHandler = (err, req, res) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = {
  notFound,
  errorHandler,
};