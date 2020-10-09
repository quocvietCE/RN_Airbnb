import {createSwitchNavigator} from 'react-navigation';
import LoggedOut from '../containers/loggedOut/LoggedOut';
import Login from '../containers/login';

const AuthTabNavigator = createSwitchNavigator(
  {
    LoggedOutStack: {
      screen: LoggedOut,
    },
    LoginStack: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'LoginStack',
  },
);

export default AuthTabNavigator;
