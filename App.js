import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/navigation/appNavigator';
import Loader from './src/containers/manager/loader';
import ErrorMessage from './src/containers/manager/errorMessage';

import Store from './src/store';

const {store, persistor} = Store();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
          <Loader />
          <ErrorMessage />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
