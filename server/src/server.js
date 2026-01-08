import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import config from './config/env.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

// Import routes
import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/project.routes.js';
import skillRoutes from './routes/skill.routes.js';
import educationRoutes from './routes/education.routes.js';
import achievementRoutes from './routes/achievement.routes.js';
import statusRoutes from './routes/status.routes.js';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// ============================================
// MIDDLEWARE
// ============================================

// CORS configuration
const corsOptions = {
  origin:  function (origin, callback) {
    const allowedOrigins = [
      config.frontendUrl,
      'http://localhost:5173',
      'http://localhost:3000',
      'https://your-portfolio.vercel.app', // Add your Vercel URL here
    ];

    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging (development only)
if (config.nodeEnv === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// ============================================
// ROUTES
// ============================================

// Health check route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running!  🚀',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// API health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    database: 'Connected',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/status', statusRoutes);

// ============================================
// ERROR HANDLING
// ============================================

// 404 handler (must be after all routes)
app.use(notFound);

// Global error handler (must be last)
app.use(errorHandler);

// ============================================
// START SERVER
// ============================================

const PORT = config.port;

const server = app.listen(PORT, () => {
  console.log('\n========================================');
  console.log(`🚀 Server running in ${config.nodeEnv} mode`);
  console.log(`📡 Server URL: http://localhost:${PORT}`);
  console.log(`🌐 API URL: http://localhost:${PORT}/api`);
  console.log(`🔗 Frontend URL: ${config.frontendUrl}`);
  console.log('========================================\n');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`❌ Unhandled Rejection:  ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error(`❌ Uncaught Exception: ${err.message}`);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received.  Shutting down gracefully...');
  server.close(() => {
    console.log('✅ Process terminated');
  });
});

export default app;