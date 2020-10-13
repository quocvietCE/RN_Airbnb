import {createStackNavigator} from 'react-navigation-stack';
import LoggedOut from '../containers/loggedOut/LoggedOut';
import Login from '../containers/login';
import ForgotPassword from '../containers/forgotPassword/ForgotPassword';

const AuthTabNavigator = createStackNavigator(
  {
    LoggedOutStack: {
      screen: LoggedOut,
    },
    LoginStack: {
      screen: Login,
    },
    ForgotPasswordStack: {
      screen: ForgotPassword,
    },
  },
  {
    initialRouteName: 'LoggedOutStack',
  },
);

export default AuthTabNavigator;
