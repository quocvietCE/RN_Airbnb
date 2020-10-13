import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import NoResults from './NoResults';
import {colors} from '../themes';

class SavedContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <NoResults />
      </View>
    );
  }
}
export default SavedContainer;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: colors.white,
  },
});
