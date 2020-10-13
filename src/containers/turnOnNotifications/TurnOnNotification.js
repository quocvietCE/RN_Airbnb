import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableHighlight} from 'react-native';
import {colors} from '../../themes';
import styles from './styles';
import {propTypesNavigation} from '../../config/constants/defaultPropTypes';
Icon.loadFont();

class TurnOnNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressNotifyBtn: false,
      pressSkipBtn: false,
    };

    this.handleNotifyBtnHideUnderlay = this.handleNotifyBtnHideUnderlay.bind(
      this,
    );
    this.handleNotifyBtnShowUnderlay = this.handleNotifyBtnShowUnderlay.bind(
      this,
    );
    this.handleSkipBtnHideUnderlay = this.handleSkipBtnHideUnderlay.bind(this);
    this.handleSkipBtnShowUnderlay = this.handleSkipBtnShowUnderlay.bind(this);
  }

  handleNotifyBtnHideUnderlay() {
    this.setState({pressNotifyBtn: false});
  }

  handleNotifyBtnShowUnderlay() {
    this.setState({pressNotifyBtn: true});
  }

  handleSkipBtnHideUnderlay() {
    this.setState({pressSkipBtn: false});
  }

  handleSkipBtnShowUnderlay() {
    this.setState({pressSkipBtn: true});
  }

  navigateToLoggedIn = () => {
    const {navigate} = this.props.navigation;
    navigate('LoggedInTabStack');
  };

  render() {
    const {pressNotifyBtn, pressSkipBtn} = this.state;
    const notifyBtnColor = pressNotifyBtn ? colors.green02 : colors.green01;
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Icon name="comments-o" size={46} style={styles.icon} />
          <Text style={styles.title}>Turn on notifications?</Text>
          <Text style={styles.description}>
            We can let you know when someone messages you, or notify you about
            other important account activity.
          </Text>
          <TouchableHighlight
            style={[{backgroundColor: notifyBtnColor}, styles.notifyButton]}
            onPress={this.navigateToLoggedIn}
            onShowUnderlay={this.handleNotifyBtnShowUnderlay}
            onHideUnderlay={this.handleNotifyBtnHideUnderlay}
            underlayColor={colors.green02}>
            <Text style={[{color: colors.white}, styles.buttonText]}>
              Yes, notify me
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              {backgroundColor: pressSkipBtn ? colors.gray01 : 'transparent'},
              styles.skipButton,
            ]}
            onPress={this.navigateToLoggedIn}
            onShowUnderlay={this.handleSkipBtnShowUnderlay}
            onHideUnderlay={this.handleSkipBtnHideUnderlay}
            underlayColor={colors.gray01}>
            <Text style={[{color: colors.green01}, styles.buttonText]}>
              Skip
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

TurnOnNotifications.propTypes = {
  navigation: propTypesNavigation,
};

export default TurnOnNotifications;
