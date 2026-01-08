import ProfileStatus from '../models/ProfileStatus.js';
import { successResponse, errorResponse } from '../utils/response.js';

/**
 * @desc    Get profile status
 * @route   GET /api/status
 * @access  Public
 */
export const getStatus = async (req, res) => {
  try {
    let status = await ProfileStatus.findOne();

    // Create default status if none exists
    if (! status) {
      status = await ProfileStatus.create({
        hireable: true,
        availableForWork: true,
        currentStatus:  'Available',
      });
    }

    return successResponse(res, 200, 'Status retrieved successfully', { status });
  } catch (error) {
    console.error('Get status error:', error);
    return errorResponse(res, 500, 'Failed to get status');
  }
};

/**
 * @desc    Update profile status
 * @route   PUT /api/status
 * @access  Private
 */
export const updateStatus = async (req, res) => {
  try {
    let status = await ProfileStatus.findOne();

    if (!status) {
      // Create if doesn't exist
      status = await ProfileStatus.create(req.body);
    } else {
      // Update existing
      status = await ProfileStatus.findByIdAndUpdate(
        status._id,
        req.body,
        { new: true, runValidators: true }
      );
    }

    return successResponse(res, 200, 'Status updated successfully', { status });
  } catch (error) {
    console.error('Update status error:', error);
    return errorResponse(res, 500, 'Failed to update status');
  }
};