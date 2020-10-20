import {NETWORK_ACTION} from '../actionTypes';

const setStatusConnected = (isConnected, typeNetwork) => ({
  type: NETWORK_ACTION.SET_STATUS_CONNECTED,
  status: isConnected,
  typeNetwork: typeNetwork,
});

const listingAction = {
  setStatusConnected,
};

export default listingAction;
