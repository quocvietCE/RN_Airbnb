import {AUTH_ACTION} from '../actionTypes';
import authState from '../states/authSate';

const authReducer = (state = authState.initState, action) => {
  switch (action.type) {
    case AUTH_ACTION.USER_LOGIN_SUCCESS:
      return {
        ...state,
        // account: {...action.result.object},
        // resLogin: action.result,
        // token: action.result.access_token,
        loggedInState: action.result,
      };
    // case AUTH_ACTION.LOG_OUT:
    //   return {
    //     ...authState.initState,
    //   };
    default:
      return state;
  }
};

export default authReducer;
