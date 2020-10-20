import {NETWORK_ACTION} from '../actionTypes';
import networkState from '../states/networkState';

const networkReducer = (state = networkState.initState, action) => {
  switch (action.type) {
    case NETWORK_ACTION.SET_STATUS_CONNECTED:
      return {
        ...state,
        isConnected: action.status,
        type: action.typeNetwork,
      };
    default:
      return state;
  }
};

export default networkReducer;
