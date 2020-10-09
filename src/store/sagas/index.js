import {takeLatest, all, takeEvery} from 'redux-saga/effects';
import authSaga from './authSaga';
import {AUTH_ACTION} from '../actionTypes';

function* handleLogin() {
  yield takeLatest(AUTH_ACTION.USER_LOGIN, authSaga.handleLogin);
}

export default function* rootSaga() {
  yield all([handleLogin()]);
}
