import React, {Component} from 'react';
// REDUX
import {connect} from 'react-redux';
import NavigationService from '../helpers/NavigationService';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {enableScreens} from 'react-native-screens';
import DrawerRoute from './drawerRoute';
import AuthNavigator from './authNavigator';

enableScreens();
const SwitchRoute = (loggedIn = false) =>
  createSwitchNavigator(
    {
      AuthNavigator,
      DrawerRoute,
    },
    {
      initialRouteName: loggedIn ? 'DrawerRoute' : 'AuthNavigator',
    },
  );

const AppContainer = (loggedIn = false) =>
  createAppContainer(SwitchRoute(loggedIn));

class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {loggedInState} = this.props;
    const LayoutAppContainer = AppContainer(loggedInState);
    return (
      <LayoutAppContainer ref={(ref) => NavigationService.setContainer(ref)} />
    );
  }
}

// export default AppNavigator;

const mapStateToProps = (state) => ({
  loggedInState: state.auth.loggedInState,
});

export default connect(mapStateToProps, null)(AppNavigator);
