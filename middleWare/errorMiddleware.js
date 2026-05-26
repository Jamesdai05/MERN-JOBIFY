const notFound = (req, res, next) => {
    // Check if this is an API route that might require authentication
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};


const errorHandler = (err, req, res, next) => {
  // Set status code: use existing or default to 500
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // Set message: use error message or default
  let message = err.message || 'An unexpected error occurred';

  // Handle Mongoose CastError (invalid ObjectId)
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = `Resource Not found: Invalid ObjectId`;
    statusCode = 404;
  }

  // Handle authentication errors more clearly
// Handle unauthorized / auth issues
  if (statusCode === 401 || message.toLowerCase().includes("unauthorized")) {
    statusCode = 401;
    message = "Authentication required";
  }

  // If headers already sent, delegate to default error handler
  if (res.headersSent) {
    return next(err);
  }

  // Send error response
  res.status(statusCode).json({
    status: statusCode === 401 ? "UNAUTHORIZED" : "ERROR",
    message,
    ...(statusCode === 401 && {
        help: "Please login at /api/auth/login or register at /api/auth/register"
    }),
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = 500;
  }
}

export {
    errorHandler,
    notFound,
    BadRequestError
}
