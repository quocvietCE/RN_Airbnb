const initState = {
  languageCode: 'en',

  errorMessage: null,
  isLoading: false,
};

const setRequestSuccess = () => ({
  errorMessage: null,
  isLoading: false,
});

const setRequestFailed = (message) => ({
  errorMessage: message,
  isLoading: false,
});

const appState = {
  initState,
  setRequestSuccess,
  setRequestFailed,
};

export default appState;
