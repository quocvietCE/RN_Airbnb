import {put, select} from 'redux-saga/effects';

import {AUTH_ACTION} from '../actionTypes';
import SYSTEM_POPUP from '../../config/constants/systemErrorTypes';
import user from '../../config/constants/user.json';

function* handleLogin(data) {
  try {
    const {email, password} = data.payload;
    const {isConnected} = yield select((state) => state.network);
    if (!isConnected) {
      yield put({
        type: AUTH_ACTION.USER_LOGIN_FAILURE,
        errorObject: {
          errorType: SYSTEM_POPUP.GENERAL,
          errorMessage: 'Network Error',
        },
      });
      return;
    }
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
      errorObject: {
        errorType: SYSTEM_POPUP.GENERAL,
        errorMessage: error.data.error,
      },
    });
  }
}

const authSaga = {
  handleLogin,
};

export default authSaga;
