import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.yourdomain.com', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the auth token in every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;