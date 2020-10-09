const initState = {
  countryCode: null,
  languageCode: 'en',
  countryIndex: null,
  callingCode: null,
  errorMessage: null,
  isLoading: false,
  pageRequired: null,
  modalStatus: null,
  modalData: null,
  openAddressModal: false,
  configs: {},

  permission: true,
};

const setRequestSuccess = () => ({
  errorMessage: null,
  isLoading: false,
});

const setRequestFailed = (message) => ({
  errorMessage: message,
  isLoading: false,
});

const setPageRequiredName = (pageName) => ({
  pageRequired: pageName,
});

const closeModal = () => ({
  modalStatus: null,
  modalData: null,
});

const appState = {
  initState,
  setRequestSuccess,
  setRequestFailed,
  setPageRequiredName,
  closeModal,
};

export default appState;
