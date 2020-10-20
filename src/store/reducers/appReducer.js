import {APP_ACTION, AUTH_ACTION, LISTING_ACTION} from '../actionTypes';
import appState from '../states/appState';

const authReducer = (state = appState.initState, action) => {
  switch (action.type) {
    case AUTH_ACTION.USER_LOGIN:
    case LISTING_ACTION.GET_LISTING_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_ACTION.USER_LOGIN_SUCCESS:
    case LISTING_ACTION.GET_LISTING_DATA_SUCCESS:
      return {
        ...state,
        ...appState.setRequestSuccess(),
      };
    case AUTH_ACTION.USER_LOGIN_FAILURE:
    case LISTING_ACTION.GET_LISTING_DATA_FAILURE:
      return {
        ...state,
        ...appState.setRequestFailed(action.errorObject),
      };
    case APP_ACTION.CLEAR_ERROR:
      return {
        ...state,
        errorObject: {},
      };
    default:
      return state;
  }
};

export default authReducer;
