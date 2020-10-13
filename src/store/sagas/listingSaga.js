import {put} from 'redux-saga/effects';

import {getListing} from '../../services/listing';

import {LISTING_ACTION} from '../actionTypes';
import SYSTEM_POPUP from '../../config/constants/systemErrorTypes';

function* handleGetListing() {
  try {
    const result = yield getListing();
    console.log('handleGetListing result', result);
    yield put({
      type: LISTING_ACTION.GET_LISTING_DATA_SUCCESS,
      result: result.data,
    });
  } catch (error) {
    console.log('LISTING_ACTION.GET_LISTING_DATA_FAILURE error: ', error);
    yield put({
      type: LISTING_ACTION.GET_LISTING_DATA_FAILURE,
      error: {
        type: SYSTEM_POPUP.GENERAL,
        error: error.data.error || error,
      },
    });
  }
}

const listingSaga = {
  handleGetListing,
};

export default listingSaga;
