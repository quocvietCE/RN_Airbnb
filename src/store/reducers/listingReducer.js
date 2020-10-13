import {LISTING_ACTION} from '../actionTypes';
import listingState from '../states/listingState';

const listingReducer = (state = listingState.initState, action) => {
  switch (action.type) {
    case LISTING_ACTION.GET_LISTING_DATA_SUCCESS:
      return {
        ...state,
        listingData: action.result || [],
      };
    default:
      return state;
  }
};

export default listingReducer;
