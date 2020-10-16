import 'react-native';
import appReducer from '../../../../store/reducers/appReducer';
import appState from '../../../../store/states/appState';
import {APP_ACTION, AUTH_ACTION} from '../../../../store/actionTypes';

describe('Test appReducer', () => {
  it('returns the same appReducer state on an unhandled state', () => {
    expect(appReducer(appState.initState, {type: '_NULL'})).toMatchSnapshot();
  });

  it('Check AUTH_ACTION.USER_LOGIN_FAILURE type', () => {
    expect(
      appReducer(appState.initState, {
        type: AUTH_ACTION.USER_LOGIN,
      }),
    ).toEqual({
      ...appState.initState,
      isLoading: true,
    });
  });

  it('Check Snapshot AUTH_ACTION.USER_LOGIN_SUCCESS type', () => {
    expect(
      appReducer(appState.initState, {
        type: AUTH_ACTION.USER_LOGIN_SUCCESS,
      }),
    ).toMatchSnapshot();
  });

  it('Check Snapshot AUTH_ACTION.USER_LOGIN_FAILURE type', () => {
    expect(
      appReducer(appState.initState, {
        type: AUTH_ACTION.USER_LOGIN_FAILURE,
        error: 'Network Error',
      }),
    ).toMatchSnapshot();
  });

  it('Check AUTH_ACTION.USER_LOGIN_FAILURE type', () => {
    expect(
      appReducer(appState.initState, {
        type: AUTH_ACTION.USER_LOGIN_FAILURE,
        error: 'Network Error',
      }),
    ).toEqual({
      ...appState.initState,
      errorMessage:
        'Sorry, it looks like the Username and/or Password you provided does not match our records',
      isLoading: false,
    });
  });

  it('Check Snapshot APP_ACTION.CLEAR_ERROR type', () => {
    expect(
      appReducer(appState.initState, {
        type: APP_ACTION.CLEAR_ERROR,
      }),
    ).toMatchSnapshot();
  });
});
