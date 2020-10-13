import api from '../helpers/api';
import API_URL from '../config/constants/apiUrl';
import {API_METHOD} from '../config/constants/enumsAPI';

export const getListing = () => api(API_URL.PRODUCT, API_METHOD.GET);
