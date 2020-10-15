import 'react-native';
import appAction from '../appAction';
import {APP_ACTION} from '../../actionTypes';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const mockStore = configureStore(middlewares);

const store = mockStore();

describe('Test appAction', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch action updateLanguage', () => {
    const actions = appAction.updateLanguage('vn', 'vi');
    const expectedPayload = {
      type: APP_ACTION.UPDATE_LANGUAGE,
      payload: {
        countryCode: 'vn',
        languageCode: 'vi',
      },
    };
    expect(actions).toEqual(expectedPayload);
  });

  it('should dispatch action clearError', () => {
    const actions = appAction.clearError();
    const expectedPayload = {type: APP_ACTION.CLEAR_ERROR};
    expect(actions).toEqual(expectedPayload);
  });
});
