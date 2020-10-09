import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import API_URL from '../config/constants/apiUrl';

export class ApiError extends Error {
  status = null;

  data = null;

  constructor(status, message, data) {
    super(message);
    this.status = status;
    this.data = data;
  }

  getErrorMessage() {
    if (this.message && this.message) {
      return this.message;
    }

    if (this.data && this.data.errors) {
      return this.data.errors.message || 'Unknown API Error';
    }

    return 'Unknown API Error';
  }
}

/**
 * Handle all errors from server and application
 *
 * @param {Error} error An error from axios library
 * @return {Object}
 */
export function handlingErrors(error) {
  let message;
  let status;
  let data;
  try {
    if (error.response) {
      console.log('API_ERROR', error.response);

      if (error.response.status === 401) {
      }

      if (error.response.status === 413) {
        message = 'File too large';
        data = {error: 'File too large'};
        status = error.response.status;
        return new ApiError(status, message, data);
      }

      message = error.response.data.message;
      data = error.response.data;
      status = error.response.data.status;
    } else {
      message = error.message;
    }
  } catch (e) {
    message = e.message;
  }

  return new ApiError(status, message, data);
}

/**
 * As middleware for API calling
 *
 * @param {string} url URL endpoint
 * @param {RequestMethodType} method Rest API method
 * @param {Object} data Body of rest API
 * @param {Object} headers Header of rest API
 * @return {Promise}
 */
export default (url, method, data, headers) =>
  new Promise(async (resolve, reject) => {
    try {
      let defaultHeader = {
        'Content-type': 'application/json',
      };
      /** for action has no token */
      if (url !== API_URL.LOGIN && url !== API_URL.REGISTER) {
        const token = await AsyncStorage.getItem('TOKEN');
        if (token) {
          defaultHeader = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          };
        }
      }

      const response = await axios.request({
        data,
        headers: {
          ...defaultHeader,
          ...headers,
        },
        method,
        url,
        timeout: 100000,
      });
      console.log('response API: ', response);
      resolve(response.data);
    } catch (error) {
      reject(handlingErrors(error));
    }
  });
