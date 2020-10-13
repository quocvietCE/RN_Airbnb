import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import InputField from '../../components/form/InputField';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import NextArrowButton from '../../components/buttons/NextArrowButton';
import NavBarButton from '../../components/buttons/NavBarButton';
import Notification from '../../components/Notification';
import {colors, stylesApp} from '../../themes';
import styles from './styles';
// import Loader from '../../components/Loader';
import {propTypesNavigation} from '../../config/constants/defaultPropTypes';
Icon.loadFont();

class Login extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: () => (
      <NavBarButton
        location="right"
        color={colors.white}
        text="Forgot Password"
        handleButtonPress={() => navigation.navigate('ForgotPasswordStack')}
      />
    ),
    headerLeft: () => (
      <NavBarButton
        location="left"
        icon={<Icon name="angle-left" color={colors.white} size={30} />}
        handleButtonPress={() => navigation.pop()}
      />
    ),
    headerStyle: stylesApp.transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
    headerTitle: '',
  });

  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAddress: '',
      password: '',
      validPassword: false,
      loadingVisible: false,
      secureInput:
        props.inputType === 'text' || props.inputType === 'email'
          ? false
          : true,
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
  }

  handleNextButton() {
    this.setState({loadingVisible: true});
    const {navigate} = this.props.navigation;
    const {emailAddress, password} = this.state;
    this.props.login(emailAddress, password);
    if (this.props.loggedInState) {
      this.setState({formValid: true, loadingVisible: false});
      navigate('TurnOnNotificationStack');
    } else {
      this.setState({formValid: false, loadingVisible: false});
    }
  }

  handleEmailChange(email) {
    // eslint-disable-next-line
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const {validEmail} = this.state;
    this.setState({emailAddress: email});

    if (!validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({validEmail: true});
      }
    } else if (!emailCheckRegex.test(email)) {
      this.setState({validEmail: false});
    }
  }

  handlePasswordChange(password) {
    const {validPassword} = this.state;

    this.setState({password});

    if (!validPassword) {
      if (password.length > 4) {
        // Password has to be at least 4 characters long
        this.setState({validPassword: true});
      }
    } else if (password <= 4) {
      this.setState({validPassword: false});
    }
  }

  handleCloseNotification() {
    this.setState({formValid: true});
  }

  toggleNextButtonState() {
    const {validEmail, validPassword} = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }

  render() {
    const {formValid, loadingVisible, validEmail, validPassword} = this.state;
    const showNotification = !formValid;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[{backgroundColor: background}, styles.wrapper]}
        behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{marginBottom: 30}}
              onChangeText={this.handleEmailChange}
              showCheckMark={validEmail}
              autoFocus={true}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{marginBottom: 30}}
              onChangeText={this.handlePasswordChange}
              showCheckMark={validPassword}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
              disabled={this.toggleNextButtonState()}
            />
          </View>
        </View>
        <View
          style={[
            styles.notificationWrapper,
            {marginTop: notificationMarginTop},
          ]}>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            firstLine="Those credentials don't look right."
            secondLine="Please try again."
          />
        </View>
        {/* <Loader modalVisible={loadingVisible} animationType="fade" /> */}
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  navigation: propTypesNavigation,
};

export default Login;
