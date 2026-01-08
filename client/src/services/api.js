import axios from 'axios';

// API Base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request. use(
  (config) => {
    const token = localStorage. getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API Functions

// Auth
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
  changePassword: (passwords) => api.put('/auth/change-password', passwords),
  setup: (adminData) => api.post('/auth/setup', adminData),
};

// Projects
export const projectAPI = {
  getAll: (params) => api.get('/projects', { params }),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

// Skills
export const skillAPI = {
  getAll: () => api.get('/skills'),
  getById: (id) => api.get(`/skills/${id}`),
  create: (data) => api.post('/skills', data),
  update: (id, data) => api.put(`/skills/${id}`, data),
  delete: (id) => api.delete(`/skills/${id}`),
};

// Education
export const educationAPI = {
  getAll: () => api.get('/education'),
  getById: (id) => api.get(`/education/${id}`),
  create: (data) => api.post('/education', data),
  update: (id, data) => api.put(`/education/${id}`, data),
  delete: (id) => api.delete(`/education/${id}`),
};

// Achievements
export const achievementAPI = {
  getAll: (params) => api.get('/achievements', { params }),
  getById: (id) => api.get(`/achievements/${id}`),
  create: (data) => api.post('/achievements', data),
  update: (id, data) => api.put(`/achievements/${id}`, data),
  delete: (id) => api.delete(`/achievements/${id}`),
};

// Status
export const statusAPI = {
  get: () => api.get('/status'),
  update: (data) => api.put('/status', data),
};

export default api;