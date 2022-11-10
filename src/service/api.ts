import axios, { AxiosError, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: process.env.APIBASEURL,
});

api.interceptors.response.use((response: AxiosResponse) => {
  if(response.status === 401) {
    console.error("Not authorized");
  }
  return response;
}, (error: AxiosError) => {
  if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});

export default api;