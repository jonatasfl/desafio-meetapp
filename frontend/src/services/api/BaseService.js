import axios from 'axios';
import { getToken } from '~/services/auth';

class BaseService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.api.interceptors.request.use(config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }
}

export default BaseService;
