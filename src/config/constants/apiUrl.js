const VERSION_API = 'v1';
const EX_API = 'https://5f587c0a1a07d600167e7d27.mockapi.io/api';

const API_URL = {
  // AUTHENTICATE
  LOGIN: `${EX_API}/${VERSION_API}/sign_in`,
  REGISTER: `${EX_API}/${VERSION_API}/sign_up`,

  PRODUCT: `${EX_API}/${VERSION_API}/products`,
};

export default API_URL;
