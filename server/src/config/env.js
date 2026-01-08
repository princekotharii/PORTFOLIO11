import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodbUri: process.env.MONGODB_URI,
  jwtSecret: process. env.JWT_SECRET,
  jwtExpire: process.env. JWT_EXPIRE || '7d',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  adminEmail: process. env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
};

// Validate required environment variables
const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET'];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`❌ Error: ${envVar} is not defined in . env file`);
    process.exit(1);
  }
});

export default config;