import Education from '../models/Education.js';
import { successResponse, errorResponse } from '../utils/response.js';

/**
 * @desc    Get all education
 * @route   GET /api/education
 * @access  Public
 */
export const getAllEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1, startDate: -1 });

    return successResponse(res, 200, 'Education retrieved successfully', {
      count: education.length,
      education,
    });
  } catch (error) {
    console.error('Get education error:', error);
    return errorResponse(res, 500, 'Failed to get education');
  }
};

/**
 * @desc    Get single education
 * @route   GET /api/education/:id
 * @access  Public
 */
export const getEducationById = async (req, res) => {
  try {
    const education = await Education. findById(req.params.id);

    if (!education) {
      return errorResponse(res, 404, 'Education not found');
    }

    return successResponse(res, 200, 'Education retrieved successfully', { education });
  } catch (error) {
    console.error('Get education error:', error);
    return errorResponse(res, 500, 'Failed to get education');
  }
};

/**
 * @desc    Create new education
 * @route   POST /api/education
 * @access  Private
 */
export const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);

    return successResponse(res, 201, 'Education created successfully', { education });
  } catch (error) {
    console.error('Create education error:', error);
    return errorResponse(res, 500, 'Failed to create education');
  }
};

/**
 * @desc    Update education
 * @route   PUT /api/education/:id
 * @access  Private
 */
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!education) {
      return errorResponse(res, 404, 'Education not found');
    }

    return successResponse(res, 200, 'Education updated successfully', { education });
  } catch (error) {
    console.error('Update education error:', error);
    return errorResponse(res, 500, 'Failed to update education');
  }
};

/**
 * @desc    Delete education
 * @route   DELETE /api/education/:id
 * @access  Private
 */
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);

    if (!education) {
      return errorResponse(res, 404, 'Education not found');
    }

    return successResponse(res, 200, 'Education deleted successfully');
  } catch (error) {
    console.error('Delete education error:', error);
    return errorResponse(res, 500, 'Failed to delete education');
  }
};