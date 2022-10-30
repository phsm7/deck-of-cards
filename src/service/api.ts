import axios from 'axios';

const api = axios.create({
  baseURL: process.env.APIBASEURL,
});

export default api;