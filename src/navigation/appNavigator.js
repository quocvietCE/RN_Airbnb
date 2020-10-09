import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import NavigationService from '../helpers/NavigationService';
import AppContainer from './appContainer';

class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContainer ref={(ref) => NavigationService.setContainer(ref)} />
    );
  }
} 

export default AppNavigator;