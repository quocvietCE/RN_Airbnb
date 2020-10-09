import React, { Component } from "react";
import ProTypes from "prop-types";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import {colors} from '../../themes';

class RounderButton extends Component {
  render() {
    const { text, textColor, background, icon, handleOnPress } = this.props;
    const backgroundColor = background || "transparent";
    const color = textColor || colors.black;
    return (
      <TouchableHighlight
        style={[{ backgroundColor }, styles.wrapper]}
        onPress={handleOnPress}
      >
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[{ color }, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default RounderButton;

RounderButton.ProTypes = {
  text: ProTypes.string.isRequired,
  textColor: ProTypes.string,
  background: ProTypes.string,
  icon: ProTypes.object,
  handleOnPress: ProTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
