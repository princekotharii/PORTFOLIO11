import { verifyToken } from '../utils/jwt.js';
import Admin from '../models/Admin.js';
import { errorResponse } from '../utils/response.js';

/**
 * Protect routes - Verify JWT token
 */
export const protect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if token exists
  if (!token) {
    return errorResponse(res, 401, 'Not authorized, no token provided');
  }

  try {
    // Verify token
    const decoded = verifyToken(token);

    // Find admin and attach to request
    req.admin = await Admin.findById(decoded.id).select('-password');

    if (!req.admin) {
      return errorResponse(res, 401, 'Admin not found');
    }

    next();
  } catch (error) {
    console.error('Auth middleware error:', error. message);
    return errorResponse(res, 401, 'Not authorized, token failed');
  }
};