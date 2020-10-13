import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class InboxContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>InboxContainer</Text>
      </View>
    );
  }
}
export default InboxContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
