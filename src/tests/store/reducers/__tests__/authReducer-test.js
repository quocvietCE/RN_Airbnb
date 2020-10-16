import React from 'react';
import 'react-native';
import authReducer from '../../../../store/reducers/authReducer';
import authSate from '../../../../store/states/authSate';
import {AUTH_ACTION} from '../../../../store/actionTypes';

describe('Test appReducer', () => {
  it('returns the same appReducer state on an unhandled state', () => {
    expect(authReducer(authSate.initState, {type: '_NULL'})).toMatchSnapshot();
  });

  it('Check Snapshot AUTH_ACTION.USER_LOGIN_SUCCESS type', () => {
    expect(
      authReducer(authSate.initState, {
        type: AUTH_ACTION.USER_LOGIN_SUCCESS,
      }),
    ).toMatchSnapshot();
  });

  it('Check Snapshot AUTH_ACTION.USER_LOGIN_FAILURE type', () => {
    expect(
      authReducer(authSate.initState, {
        type: AUTH_ACTION.USER_LOGIN_FAILURE,
        error: 'Network Error',
      }),
    ).toMatchSnapshot();
  });

  it('handles login AUTH_ACTION.USER_LOGIN_SUCCESS type', () => {
    expect(
      authReducer(authSate.initState, {
        type: AUTH_ACTION.USER_LOGIN_SUCCESS,
        result: true,
      }),
    ).toEqual({
      ...authSate.initState,
      loggedInState: true,
    });
  });

  it('handles logout AUTH_ACTION.LOG_OUT type', () => {
    expect(
      authReducer(authSate.initState, {
        type: AUTH_ACTION.LOG_OUT,
      }),
    ).toEqual({
      ...authSate.initState,
    });
  });
});
