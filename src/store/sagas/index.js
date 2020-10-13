import {takeLatest, all, takeEvery} from 'redux-saga/effects';
import authSaga from './authSaga';
import listingSaga from './listingSaga';
import {AUTH_ACTION, LISTING_ACTION} from '../actionTypes';

function* handleLogin() {
  yield takeLatest(AUTH_ACTION.USER_LOGIN, authSaga.handleLogin);
}

function* handleGetListing() {
  yield takeLatest(
    LISTING_ACTION.GET_LISTING_DATA,
    listingSaga.handleGetListing,
  );
}

export default function* rootSaga() {
  yield all([handleLogin(), handleGetListing()]);
}
