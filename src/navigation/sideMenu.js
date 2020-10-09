import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../themes';
Icon.loadFont();

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>SideMenu</Text>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Icon name="close" color={colors.black} size={36} />
        </TouchableOpacity>
      </View>
    );
  }
}

SideMenu.propTypes = {};

SideMenu.defaultProps = {};

export default SideMenu;
