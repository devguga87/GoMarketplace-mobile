import axios from 'axios';

const api = axios.create({
  baseURL: 'http://196.168.0.17:3333',
});

export default api;
