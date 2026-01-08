import Admin from '../models/Admin.js';
import { generateToken } from '../utils/jwt.js';
import { successResponse, errorResponse } from '../utils/response.js';

/**
 * @desc    Login admin
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return errorResponse(res, 400, 'Please provide email and password');
    }

    // Find admin with password field
    const admin = await Admin. findOne({ email }).select('+password');

    if (!admin) {
      return errorResponse(res, 401, 'Invalid credentials');
    }

    // Check password
    const isPasswordValid = await admin.comparePassword(password);

    if (!isPasswordValid) {
      return errorResponse(res, 401, 'Invalid credentials');
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    // Generate token
    const token = generateToken(admin._id);

    // Send response
    return successResponse(res, 200, 'Login successful', {
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return errorResponse(res, 500, 'Login failed');
  }
};

/**
 * @desc    Get current admin profile
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);

    return successResponse(res, 200, 'Admin profile retrieved', {
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (error) {
    console.error('Get me error:', error);
    return errorResponse(res, 500, 'Failed to get profile');
  }
};

/**
 * @desc    Change admin password
 * @route   PUT /api/auth/change-password
 * @access  Private
 */
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Validate input
    if (!currentPassword || ! newPassword) {
      return errorResponse(res, 400, 'Please provide current and new password');
    }

    if (newPassword.length < 6) {
      return errorResponse(res, 400, 'New password must be at least 6 characters');
    }

    // Find admin with password
    const admin = await Admin.findById(req.admin._id).select('+password');

    // Verify current password
    const isPasswordValid = await admin.comparePassword(currentPassword);

    if (!isPasswordValid) {
      return errorResponse(res, 401, 'Current password is incorrect');
    }

    // Update password
    admin.password = newPassword;
    await admin.save();

    return successResponse(res, 200, 'Password changed successfully');
  } catch (error) {
    console.error('Change password error:', error);
    return errorResponse(res, 500, 'Failed to change password');
  }
};

/**
 * @desc    Create initial admin (only if no admin exists)
 * @route   POST /api/auth/setup
 * @access  Public (but only works once)
 */
export const setupAdmin = async (req, res) => {
  try {
    // Check if admin already exists
    const adminExists = await Admin.findOne();

    if (adminExists) {
      return errorResponse(res, 400, 'Admin already exists');
    }

    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password) {
      return errorResponse(res, 400, 'Please provide email and password');
    }

    // Create admin
    const admin = await Admin.create({
      email,
      password,
      name:  name || 'Admin',
    });

    // Generate token
    const token = generateToken(admin._id);

    return successResponse(res, 201, 'Admin created successfully', {
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    console.error('Setup admin error:', error);
    return errorResponse(res, 500, 'Failed to create admin');
  }
};