// API Configuration
// Uses environment variables in production, falls back to localhost in development

const API_CONFIG = {
  // Backend API URL (changed to port 3001 to avoid conflict with ML API on 8000)
  BACKEND_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  
  // ML API URL
  ML_API_URL: import.meta.env.VITE_ML_API_URL || 'http://localhost:8000',
};

export default API_CONFIG;

