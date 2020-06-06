import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.111:3333',
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkpvbmF0YXMgTGl6YW5kcm8iLCJlbWFpbCI6ImpvbmF0YXMuZXhlQGdtYWlsLmNvbSIsImlhdCI6MTU5MTQwNzk5NywiZXhwIjoxNTkyMDEyNzk3fQ.l2NOVJgHndc5kvRhjYw7BYEweAa_2nxE2NHcx6U8py8`;
  return config;
});

export default api;
