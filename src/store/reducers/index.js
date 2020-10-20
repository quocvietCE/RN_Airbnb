import {combineReducers} from 'redux';
import auth from './authReducer';
import app from './appReducer';
import listing from './listingReducer';
import network from './networkReducer';

export default combineReducers({
  auth,
  app,
  listing,
  network,
});
