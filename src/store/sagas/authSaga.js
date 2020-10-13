import {put, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import {requestLogin} from '../../services/auth';

import {AUTH_ACTION} from '../actionTypes';
import SYSTEM_POPUP from '../../config/constants/systemErrorTypes';
import user from '../../config/constants/user.json';

function* handleLogin(data) {
  try {
    const {email, password} = data.payload;
    if (email === user.email && password === user.password) {
      yield put({
        type: AUTH_ACTION.USER_LOGIN_SUCCESS,
        result: true,
      });
    } else {
      yield put({
        type: AUTH_ACTION.USER_LOGIN_FAILURE,
        result: false,
      });
    }
  } catch (error) {
    yield put({
      type: AUTH_ACTION.USER_LOGIN_FAILURE,
      error: {
        type: SYSTEM_POPUP.GENERAL,
        error: error.data.error,
      },
    });
  }
}

const authSaga = {
  handleLogin,
};

export default authSaga;
