import React from 'react';
import 'react-native';
import appReducer from '../appReducer';
import appState from '../../states/appState';
import {APP_ACTION, AUTH_ACTION} from '../../actionTypes';

describe('Test appReducer', () => {
  it('returns the same appReducer state on an unhandled state', () => {
    expect(appReducer(appState.initState, {type: '_NULL'})).toMatchSnapshot();
  });

  it('Check AUTH_ACTION.USER_LOGIN_SUCCESS type', () => {
    expect(
      appReducer(appState.initState, {
        type: AUTH_ACTION.USER_LOGIN_SUCCESS,
        // payload: {prop: 'floor_name', value: 'G'},
      }),
    ).toMatchSnapshot();
  });

  it('Check AUTH_ACTION.USER_LOGIN_FAILURE type', () => {
    expect(
      appReducer(appState.initState, {
        type: AUTH_ACTION.USER_LOGIN_FAILURE,
        error: 'Network Error',
      }),
    ).toMatchSnapshot();
  });

  it('Check APP_ACTION.CLEAR_ERROR type', () => {
    expect(
      appReducer(appState.initState, {
        type: APP_ACTION.CLEAR_ERROR,
      }),
    ).toMatchSnapshot();
  });
});
