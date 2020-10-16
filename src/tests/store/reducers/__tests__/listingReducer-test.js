import React from 'react';
import 'react-native';
import listingReducer from '../../../../store/reducers/listingReducer';
import listingState from '../../../../store/states/listingState';
import {LISTING_ACTION} from '../../../../store/actionTypes';

describe('Test listingReducer', () => {
  it('returns the same listingReducer state on an unhandled state', () => {
    expect(
      listingReducer(listingState.initState, {type: '_NULL'}),
    ).toMatchSnapshot();
  });

  it('handles get request LISTING_ACTION.GET_LISTING_DATA_SUCCESS', () => {
    expect(
      listingReducer(listingState.initState, {
        type: LISTING_ACTION.GET_LISTING_DATA_SUCCESS,
      }),
    ).toEqual({
      ...listingState.initState,
      listingData: [],
    });
  });
});
