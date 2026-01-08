import { errorResponse } from '../utils/response.js';

/**
 * Global error handler
 */
export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Mongoose duplicate key error
  if (err. code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return errorResponse(res, 400, `${field} already exists`);
  }

  // Mongoose validation error
  if (err. name === 'ValidationError') {
    const errors = Object.values(err. errors).map((e) => e.message);
    return errorResponse(res, 400, 'Validation error', errors);
  }

  // Mongoose CastError (invalid ObjectId)
  if (err.name === 'CastError') {
    return errorResponse(res, 400, 'Invalid ID format');
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return errorResponse(res, 401, 'Invalid token');
  }

  if (err.name === 'TokenExpiredError') {
    return errorResponse(res, 401, 'Token expired');
  }

  // Default error
  return errorResponse(
    res,
    err.statusCode || 500,
    err.message || 'Internal server error'
  );
};

/**
 * Handle 404 routes
 */
export const notFound = (req, res, next) => {
  return errorResponse(res, 404, `Route ${req.originalUrl} not found`);
};