import jwt from 'jsonwebtoken';
import config from '../config/env.js';

/**
 * Generate JWT token
 * @param {string} id - User ID
 * @returns {string} - JWT token
 */
export const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: config.jwtExpire,
  });
};

/**
 * Verify JWT token
 * @param {string} token - JWT token
 * @returns {object} - Decoded token
 */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, config. jwtSecret);
  } catch (error) {
    throw new Error('Invalid token');
  }
};