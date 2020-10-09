import {APP_ACTION, AUTH_ACTION} from '../actionTypes';
import appState from '../states/appState';

const authReducer = (state = appState.initState, action) => {
  switch (action.type) {
    // case AUTH_ACTION.CUSTOMER_LOGIN:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case AUTH_ACTION.CUSTOMER_LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     ...appState.setRequestSuccess(),
    //   };
    // case AUTH_ACTION.CUSTOMER_LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     ...appState.setRequestFailed(action.error),
    //   };
    // case APP_ACTION.CLEAR_ERROR:
    //   return {
    //     ...state,
    //     errorMessage: null,
    //   };
    default:
      return state;
  }
};

export default authReducer;
