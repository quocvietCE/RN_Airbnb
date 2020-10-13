import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreContainer from '../containers/explore';
import Inbox from '../components/Inbox';
import Profile from '../containers/profile';
import Saved from '../components/Saved';
import Trips from '../components/Trips';
import {colors} from '../themes';
Ionicons.loadFont();

const LoggedInTabBottomNavigator = createBottomTabNavigator(
  {
    ExploreTab: {
      screen: ExploreContainer,
      navigationOptions: {
        title: 'EXPLORE',
      },
    },
    SavedTab: {
      screen: Saved,
      navigationOptions: {
        title: 'SAVED',
      },
    },
    TripsTab: {
      screen: Trips,
      navigationOptions: {
        title: 'TRIPS',
      },
    },
    InboxTab: {
      screen: Inbox,
      navigationOptions: {
        title: 'INBOX',
      },
    },
    ProfileTab: {
      screen: Profile,
      navigationOptions: {
        title: 'PROFILE',
      },
    },
  },
  {
    initialRouteName: 'ExploreTab',
    tabBarOptions: {
      fontWeight: '600',
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        var color = focused ? colors.pink : colors.gray02;
        let iconName;
        if (routeName === 'ExploreTab') {
          iconName = 'ios-search';
        } else if (routeName === 'SavedTab') {
          iconName = 'ios-heart-outline';
        } else if (routeName === 'TripsTab') {
          iconName = 'logo-ionic';
        } else if (routeName === 'InboxTab') {
          iconName = 'ios-archive';
        } else {
          iconName = 'ios-person-circle-outline';
        }
        return <Ionicons name={iconName} size={25} color={color} />;
      },
      tabBarOptions: {
        activeTintColor: colors.pink,
        inactiveTintColor: colors.gray02,
        // labelStyle: {fontWeight: 'bold'},
      },
    }),
  },
);

export default LoggedInTabBottomNavigator;
