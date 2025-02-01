import axios from 'axios';


const api = axios.create({
  baseURL: '/api/auth/signup',
});

export default api;
