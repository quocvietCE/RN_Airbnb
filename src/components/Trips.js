import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class TripsContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TripsContainer</Text>
      </View>
    );
  }
}
export default TripsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
