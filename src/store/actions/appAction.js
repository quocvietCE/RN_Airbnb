import {APP_ACTION} from '../actionTypes';

const updateLanguage = (countryCode, languageCode) => ({
  type: APP_ACTION.UPDATE_LANGUAGE,
  payload: {
    countryCode,
    languageCode,
  },
});

const clearError = () => ({
  type: APP_ACTION.CLEAR_ERROR,
});

const appActions = {
  updateLanguage,
  clearError,
};

export default appActions;
