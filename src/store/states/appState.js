const initState = {
  languageCode: 'en',

  errorObject: {},
  isLoading: false,
};

const setRequestSuccess = () => ({
  errorObject: {},
  isLoading: false,
});

const setRequestFailed = (errorObject) => ({
  errorObject: errorObject,
  isLoading: false,
});

const appState = {
  initState,
  setRequestSuccess,
  setRequestFailed,
};

export default appState;
