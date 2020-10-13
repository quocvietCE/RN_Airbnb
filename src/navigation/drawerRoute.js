import {createDrawerNavigator} from 'react-navigation-drawer';

import SideMenu from './sideMenu';
// import AppRoute from './appRoute';
import MainTabNavigator from './mainNavigator';

export default createDrawerNavigator(
  {MainTabNavigator},
  {
    drawerPosition: 'right',
    contentComponent: SideMenu,
    contentOptions: {},
    initialRouteName: 'MainTabNavigator',
    edgeWidth: 0,
  },
);
