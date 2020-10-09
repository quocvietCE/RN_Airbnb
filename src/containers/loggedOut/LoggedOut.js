import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import {colors} from '../../themes';
import BounderButton from "../../components/buttons/RounderButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { stylesApp } from "../../themes";
import NavBarButton from "../../components/buttons/NavBarButton";
import styles from './styles';
Icon.loadFont();

class LoggedOut extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <NavBarButton
        handleButtonPress={() => navigation.navigate("Login")}
        location="right"
        color={colors.white}
        text="Log In"
      />
    ),
    headerStyle: stylesApp.transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white
  });

  onFacebookPress() {
    alert("Facebook button pressed");
  }

  onCreateAccountPress() {
    alert("Create Account button pressed");
  }

  onMoreOptionsPress() {
    alert("More options button pressed");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require("../../assets/images/airbnb-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
          <BounderButton
            text="Countinue with Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={
              <Icon name="facebook" size={20} style={styles.facebookIcon} />
            }
            handleOnPress={this.onFacebookPress}
          />

          <BounderButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />

          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account or More
            </Text>
            <Text style={styles.termsText}>options,</Text>
            <Text style={styles.termsText}>I agree to Airbnb's</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default LoggedOut;