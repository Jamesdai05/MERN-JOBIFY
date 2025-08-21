const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404).json({ error: error.message });

    next(err);
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

  // If headers already sent, delegate to default error handler
  if (res.headersSent) {
    return next(err);
  }

  // Send error response
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export {
    errorHandler,
    notFound,
}
