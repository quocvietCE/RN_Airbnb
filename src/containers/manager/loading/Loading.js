import * as React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import LoadingIC from '../../../components/common/icon/LoadingIC';

import styles from './styles';

class Loading extends React.PureComponent {
  render() {
    const {isLoading} = this.props;
    if (!isLoading) {
      return null;
    }
    return (
      <View style={[styles.overlayScreen]}>
        <View style={[styles.overlayScreen, styles.opacityScreen]} />
        <LoadingIC />
      </View>
    );
  }
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default Loading;
