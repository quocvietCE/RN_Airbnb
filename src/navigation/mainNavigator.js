import {createStackNavigator} from 'react-navigation-stack';

import CreateList from '../containers/createList/CreateList';
import TurnOnNotification from '../containers/turnOnNotifications/TurnOnNotification';
import LoggedInTabBottomNavigator from './tabBottomNavigator';

const MainTabNavigator = createStackNavigator(
  {
    CreateListStack: {
      screen: CreateList,
    },
    TurnOnNotificationStack: {
      screen: TurnOnNotification,
      navigationOptions: {
        header: () => null,
      },
    },
    LoggedInTabStack: {
      screen: LoggedInTabBottomNavigator,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    initialRouteName: 'TurnOnNotificationStack',
  },
);

export default MainTabNavigator;
