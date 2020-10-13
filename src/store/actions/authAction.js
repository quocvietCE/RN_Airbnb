import {AUTH_ACTION} from '../actionTypes';

const login = (email, password) => ({
  type: AUTH_ACTION.USER_LOGIN,
  payload: {
    email,
    password,
  },
});

const logout = () => ({
  type: AUTH_ACTION.LOG_OUT,
});

const authAction = {
  login,
  logout,
};

export default authAction;
