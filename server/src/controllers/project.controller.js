import Project from '../models/Project.js';
import { successResponse, errorResponse } from '../utils/response.js';

/**
 * @desc    Get all projects
 * @route   GET /api/projects
 * @access  Public
 */
export const getAllProjects = async (req, res) => {
  try {
    const { featured, category } = req.query;
    
    let query = {};
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    if (category) {
      query.category = category;
    }

    const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });

    return successResponse(res, 200, 'Projects retrieved successfully', {
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error('Get projects error:', error);
    return errorResponse(res, 500, 'Failed to get projects');
  }
};

/**
 * @desc    Get single project
 * @route   GET /api/projects/:id
 * @access  Public
 */
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return errorResponse(res, 404, 'Project not found');
    }

    return successResponse(res, 200, 'Project retrieved successfully', { project });
  } catch (error) {
    console.error('Get project error:', error);
    return errorResponse(res, 500, 'Failed to get project');
  }
};

/**
 * @desc    Create new project
 * @route   POST /api/projects
 * @access  Private
 */
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req. body);

    return successResponse(res, 201, 'Project created successfully', { project });
  } catch (error) {
    console.error('Create project error:', error);
    return errorResponse(res, 500, 'Failed to create project');
  }
};

/**
 * @desc    Update project
 * @route   PUT /api/projects/:id
 * @access  Private
 */
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return errorResponse(res, 404, 'Project not found');
    }

    return successResponse(res, 200, 'Project updated successfully', { project });
  } catch (error) {
    console.error('Update project error:', error);
    return errorResponse(res, 500, 'Failed to update project');
  }
};

/**
 * @desc    Delete project
 * @route   DELETE /api/projects/:id
 * @access  Private
 */
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params. id);

    if (!project) {
      return errorResponse(res, 404, 'Project not found');
    }

    return successResponse(res, 200, 'Project deleted successfully');
  } catch (error) {
    console.error('Delete project error:', error);
    return errorResponse(res, 500, 'Failed to delete project');
  }
};