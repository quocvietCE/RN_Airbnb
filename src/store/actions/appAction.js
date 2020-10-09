import {APP_ACTION} from '../actionTypes';

const updateLanguage = (countryCode, languageCode) => ({
  type: APP_ACTION.UPDATE_LANGUAGE,
  payload: {
    countryCode,
    languageCode,
  },
});

export const openModal = (modalStatus, modalData) => ({
  type: APP_ACTION.OPEN_MODAL,
  modalStatus,
  modalData,
});

export const closeModal = () => ({
  type: APP_ACTION.CLOSE_MODAL,
});

const clearError = () => ({
  type: APP_ACTION.CLEAR_ERROR,
});

const appActions = {
  updateLanguage,
  openModal,
  closeModal,
  clearError,
};

export default appActions;
