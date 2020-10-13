import {LISTING_ACTION} from '../actionTypes';

const getListingData = () => ({
  type: LISTING_ACTION.GET_LISTING_DATA,
});

const listingAction = {
  getListingData,
};

export default listingAction;
