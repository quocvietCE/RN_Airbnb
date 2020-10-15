import 'react-native';
import listingAction from '../listingAction';
import {LISTING_ACTION} from '../../actionTypes';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const mockStore = configureStore(middlewares);

const store = mockStore();

describe('Test listingAction', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch action getListingData', () => {
    // Initialize mockstore with empty state
    // const initialState = {};
    // const store = mockStore(initialState);

    // Dispatch the action
    // store.dispatch();

    // Test if your store dispatched the expected actions
    // const actions = store.getActions();
    const actions = listingAction.getListingData();
    const expectedPayload = {type: LISTING_ACTION.GET_LISTING_DATA};
    expect(actions).toEqual(expectedPayload);
  });

  //   it('should execute fetch data', () => {
  //     const store = mockStore({});

  //     // Return the promise
  //     return store.dispatch(fetchData()).then(() => {
  //       const actions = store.getActions();
  //       expect(actions[0]).toEqual(success());
  //     });
  //   });
});
