import axios from 'axios';

import systemConfig from '../config/system';

const axiosInstance = axios.create({
  baseURL: systemConfig.BASE_URL,
  timeout: 60000,
});

export default axiosInstance;
