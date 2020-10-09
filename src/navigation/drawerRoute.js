import {createDrawerNavigator} from 'react-navigation-drawer';

import SideMenu from './sideMenu';
import AppRoute from './appRoute';

export default createDrawerNavigator(
  {AppRoute},
  {
    drawerPosition: 'right',
    contentComponent: SideMenu,
    contentOptions: {},
    initialRouteName: 'AppRoute',
    edgeWidth: 0,
  },
);
