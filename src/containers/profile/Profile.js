import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {PropTypes} from 'prop-types';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../../components/buttons/RoundedButton';
import {propTypesNavigation} from '../../config/constants/defaultPropTypes';
import {colors} from '../../themes';
import styles from './styles';
FontAwesomeIcon.loadFont();

class Profile extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileContainer</Text>
        <RoundedButton
          text="Log Out"
          textColor={colors.white}
          textAlign="left"
          background={colors.green01}
          borderColor="transparent"
          iconPosition="left"
          // disabled={!location}
          // loading={loading}
          icon={
            <View style={styles.buttonIcon}>
              <FontAwesomeIcon
                name="angle-right"
                color={colors.white}
                size={30}
              />
            </View>
          }
          handleOnPress={this.handleLogout}
        />
      </View>
    );
  }
}

Profile.propTypes = {
  logout: PropTypes.func.isRequired,
  navigation: propTypesNavigation,
};

export default Profile;
