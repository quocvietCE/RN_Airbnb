import * as React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import SYSTEM_POPUP from '../../../config/constants/systemErrorTypes';
import I18n from '../../../config/locales';

import {stylesApp} from '../../../themes';

import styles from './styles';

class ErrorMessage extends React.Component {
  closeError = () => {
    const {clearError} = this.props;
    clearError();
  };

  languageLocalize = (msgLabel) => {
    const {languageCode} = this.props;
    return msgLabel
      ? I18n.t(`api_error_msg.${msgLabel}`, {locale: languageCode})
      : I18n.t('errorGeneral', {locale: languageCode});
  };

  render() {
    const {error, languageCode} = this.props;
    const isShowError = error && error.type === SYSTEM_POPUP.GENERAL;
    if (!isShowError) {
      return null;
    }
    return (
      <Modal
        animationType="slide"
        transparent
        visible={isShowError}
        onRequestClose={this.closeError}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.titleErrorBox}>
              <Text style={[styles.errorText]}>
                {/* {I18n.t('error', {locale: languageCode})} */}
                Error
              </Text>
            </View>
            <View style={stylesApp.bgWhite}>
              <View style={styles.infoErrorBox}>
                <Text style={[styles.infoErrorText]}>
                  {/* {this.languageLocalize((error && error.error) || error)} */}
                  {error.error}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.btnNormal}
                activeOpacity={0.9}
                onPress={this.closeError}>
                <Text style={styles.txtBtnNormal}>
                  {/* {I18n.t('okay', {
                    locale: languageCode,
                  })} */}
                  Okay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

ErrorMessage.propTypes = {
  languageCode: PropTypes.string,
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired,
};

ErrorMessage.defaultProps = {
  languageCode: 'en',
  error: '',
};

export default ErrorMessage;
