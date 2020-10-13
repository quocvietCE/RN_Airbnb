import * as React from 'react';
import {View, Modal, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Loader extends React.PureComponent {
  render() {
    // const {animationType, modalVisible} = this.props;
    const {isLoading} = this.props;
    return (
      <Modal visible={isLoading} animationType={'fade'} transparent={true}>
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require('../../../assets/images/greenLoader.gif')}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
