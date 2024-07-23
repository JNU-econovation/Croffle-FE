import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_API_URL;

export const https = axios.create({
  baseURL: BASE_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
    // 'ngrok-skip-browser-warning': 'true',
  },
  withCredentials: true,
});

export const memberRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'ngrok-skip-browser-warning': 'true',
  },
  withCredentials: true,
});

export const authorizationRequest = axios.create({
  baseURL: BASE_URL + '/api',
  headers: {
    Authorization: `${localStorage.getItem('accessToken')}`,
    'Content-Type': 'application/json',
    // 'ngrok-skip-browser-warning': 'true',
  },
  withCredentials: true,
});

export const imageRequest = axios.create({
  baseURL: BASE_URL + '/api',
  headers: {
    'Content-Type': 'multipart/form-data',
    // 'ngrok-skip-browser-warning': 'true',
  },
  withCredentials: true,
});

export const imageMemberRequest = axios.create({
  baseURL: BASE_URL + '/api',
  headers: {
    Authorization: `${localStorage.getItem('accessToken')}`,
    'Content-Type': 'multipart/form-data',
    // 'ngrok-skip-browser-warning': 'true',
  },
  withCredentials: true,
});
