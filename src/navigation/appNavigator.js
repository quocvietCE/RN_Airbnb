import React, {Component} from 'react';
// REDUX
import {
  Platform,
  Easing,
  View,
  SafeAreaView,
  Text,
  Animated,
} from 'react-native';
import {bindActionCreators} from 'redux';
import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import NavigationService from '../helpers/NavigationService';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {enableScreens} from 'react-native-screens';
import DrawerRoute from './drawerRoute';
import AuthNavigator from './authNavigator';
import networkActions from '../store/actions/networkAction';

const {setStatusConnected} = networkActions;

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

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener((state) => {
      this.props.setStatusConnected(state.isConnected, state.type);
    });
  }

  animateNotification(value) {
    const {positionValue} = this.state;
    Animated.timing(positionValue, {
      toValue: value,
      duration: 300,
      velocity: 3,
      tension: 2,
      friction: 8,
      easing: Easing.easeOutBack,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const {loggedInState, networkIsConnected} = this.props;
    const LayoutAppContainer = AppContainer(loggedInState);
    return (
      <SafeAreaView style={{flex: 1}}>
        {!networkIsConnected && (
          <SafeAreaView
            style={{
              backgroundColor: 'red',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: Platform.OS === 'android' ? 12 : 16,
                padding: 10,
                textAlign: 'center',
                fontWeight: '500',
                letterSpacing: 2,
              }}>
              No Internet Connection
            </Text>
          </SafeAreaView>
        )}
        <LayoutAppContainer
          ref={(ref) => NavigationService.setContainer(ref)}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInState: state.auth.loggedInState,
  networkIsConnected: state.network.isConnected,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({setStatusConnected}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
