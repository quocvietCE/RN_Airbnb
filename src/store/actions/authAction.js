import {AUTH_ACTION} from '../actionTypes';

const login = (email, password) => ({
  type: AUTH_ACTION.USER_LOGIN,
  payload: {
    email,
    password,
  },
});

const authAction = {
  login,
};

export default authAction;
