import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {enableScreens} from 'react-native-screens';

// ROUTE
// import MainNavigator from './mainNavigator';
import AuthNavigator from './authNavigator';


enableScreens();
const SwitchRoute = createSwitchNavigator(
  {
    AuthNavigator,
  },
  {
    initialRouteName: 'AuthNavigator',
  },
);

export default createStackNavigator(
  {
    SwitchRoute,
  },
  {
    initialRouteName: 'SwitchRoute',
    headerMode: 'none'
  },
);
