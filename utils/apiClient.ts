import axios from 'axios';


const BACKEND_URL = process.env.VITE_API_URL || 'http://localhost:5000';


const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    // Authorization: `Bearer ${token.value}`
  }
});


export default apiClient;