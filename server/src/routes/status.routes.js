import express from 'express';
import {
  getStatus,
  updateStatus,
} from '../controllers/status.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public route
router.get('/', getStatus);

// Protected route
router.put('/', protect, updateStatus);

export default router;