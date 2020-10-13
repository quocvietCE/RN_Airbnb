import {combineReducers} from 'redux';
import auth from './authReducer';
import app from './appReducer';
import listing from './listingReducer';

export default combineReducers({
  auth,
  app,
  listing,
});
