import {createStackNavigator} from 'react-navigation-stack';

// import ContainerOne from '../containers/containerOne/ContainerOne';
// import ContainerTwo from '../containers/containerTwo/ContainerTwo';

// import Header from '../Components/Common/Header/Header';

const MainTabNavigator = createStackNavigator(
  // {
  //   ContainerOneStack: {
  //     screen: ContainerOne,
  //     // navigationOptions: {
  //     //   headerShown: false,
  //     // },
  //   },
  //   ContainerTwoStack: {
  //     screen: ContainerTwo,
  //     // navigationOptions: {
  //     //   // title: 'Header ContainerTwo',
  //     //   // headerStyle: {
  //     //   //   backgroundColor: '#f4511e',
  //     //   // },
  //     //   // headerTintColor: '#fff',
  //     //   // headerTitleStyle: {
  //     //   //   fontWeight: 'bold',
  //     //   // },
  //     //   // header: () => <Header />,
  //     //   headerShown: false,
  //     // },
  //   },
  // },
  // {
  //   initialRouteName: 'ContainerOneStack',
  //   headerMode: 'none',
  // },
  null
);

export default MainTabNavigator;
