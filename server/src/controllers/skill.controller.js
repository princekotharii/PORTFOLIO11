import Skill from '../models/Skill.js';
import { successResponse, errorResponse } from '../utils/response.js';

/**
 * @desc    Get all skills
 * @route   GET /api/skills
 * @access  Public
 */
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1 });

    return successResponse(res, 200, 'Skills retrieved successfully', {
      count: skills.length,
      skills,
    });
  } catch (error) {
    console.error('Get skills error:', error);
    return errorResponse(res, 500, 'Failed to get skills');
  }
};

/**
 * @desc    Get single skill
 * @route   GET /api/skills/:id
 * @access  Public
 */
export const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return errorResponse(res, 404, 'Skill not found');
    }

    return successResponse(res, 200, 'Skill retrieved successfully', { skill });
  } catch (error) {
    console.error('Get skill error:', error);
    return errorResponse(res, 500, 'Failed to get skill');
  }
};

/**
 * @desc    Create new skill
 * @route   POST /api/skills
 * @access  Private
 */
export const createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);

    return successResponse(res, 201, 'Skill created successfully', { skill });
  } catch (error) {
    console.error('Create skill error:', error);
    return errorResponse(res, 500, 'Failed to create skill');
  }
};

/**
 * @desc    Update skill
 * @route   PUT /api/skills/:id
 * @access  Private
 */
export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill. findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!skill) {
      return errorResponse(res, 404, 'Skill not found');
    }

    return successResponse(res, 200, 'Skill updated successfully', { skill });
  } catch (error) {
    console.error('Update skill error:', error);
    return errorResponse(res, 500, 'Failed to update skill');
  }
};

/**
 * @desc    Delete skill
 * @route   DELETE /api/skills/:id
 * @access  Private
 */
export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return errorResponse(res, 404, 'Skill not found');
    }

    return successResponse(res, 200, 'Skill deleted successfully');
  } catch (error) {
    console.error('Delete skill error:', error);
    return errorResponse(res, 500, 'Failed to delete skill');
  }
};