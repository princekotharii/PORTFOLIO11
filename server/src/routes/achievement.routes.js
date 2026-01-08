import express from 'express';
import {
  getAllAchievements,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} from '../controllers/achievement.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllAchievements);
router.get('/:id', getAchievementById);

// Protected routes
router.post('/', protect, createAchievement);
router.put('/:id', protect, updateAchievement);
router.delete('/:id', protect, deleteAchievement);

export default router;