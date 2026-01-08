import Achievement from '../models/Achievement.js';
import { successResponse, errorResponse } from '../utils/response.js';

/**
 * @desc    Get all achievements
 * @route   GET /api/achievements
 * @access  Public
 */
export const getAllAchievements = async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = {};
    
    if (category) {
      query.category = category;
    }

    const achievements = await Achievement.find(query).sort({ order: 1, date: -1 });

    return successResponse(res, 200, 'Achievements retrieved successfully', {
      count: achievements.length,
      achievements,
    });
  } catch (error) {
    console.error('Get achievements error:', error);
    return errorResponse(res, 500, 'Failed to get achievements');
  }
};

/**
 * @desc    Get single achievement
 * @route   GET /api/achievements/:id
 * @access  Public
 */
export const getAchievementById = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);

    if (!achievement) {
      return errorResponse(res, 404, 'Achievement not found');
    }

    return successResponse(res, 200, 'Achievement retrieved successfully', { achievement });
  } catch (error) {
    console.error('Get achievement error:', error);
    return errorResponse(res, 500, 'Failed to get achievement');
  }
};

/**
 * @desc    Create new achievement
 * @route   POST /api/achievements
 * @access  Private
 */
export const createAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.create(req.body);

    return successResponse(res, 201, 'Achievement created successfully', { achievement });
  } catch (error) {
    console.error('Create achievement error:', error);
    return errorResponse(res, 500, 'Failed to create achievement');
  }
};

/**
 * @desc    Update achievement
 * @route   PUT /api/achievements/:id
 * @access  Private
 */
export const updateAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!achievement) {
      return errorResponse(res, 404, 'Achievement not found');
    }

    return successResponse(res, 200, 'Achievement updated successfully', { achievement });
  } catch (error) {
    console.error('Update achievement error:', error);
    return errorResponse(res, 500, 'Failed to update achievement');
  }
};

/**
 * @desc    Delete achievement
 * @route   DELETE /api/achievements/:id
 * @access  Private
 */
export const deleteAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndDelete(req.params.id);

    if (!achievement) {
      return errorResponse(res, 404, 'Achievement not found');
    }

    return successResponse(res, 200, 'Achievement deleted successfully');
  } catch (error) {
    console.error('Delete achievement error:', error);
    return errorResponse(res, 500, 'Failed to delete achievement');
  }
};