import React from 'react';
import PropTypes from 'prop-types';
import {Image, ImageBackground, ActivityIndicator, View} from 'react-native';
import styles from './styles';

class ImageLoad extends React.Component {
  static propTypes = {
    isShowActivity: PropTypes.bool,
  };

  static defaultProps = {
    isShowActivity: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false,
    };
  }

  onLoadEnd() {
    this.setState({
      isLoaded: true,
    });
  }

  onError() {
    this.setState({
      isError: true,
    });
  }

  render() {
    const {
      style,
      source,
      resizeMode,
      borderRadius,
      backgroundColor,
      children,
      loadingStyle,
      placeholderSource,
      placeholderStyle,
      customImagePlaceholderDefaultStyle,
    } = this.props;
    return (
      <ImageBackground
        onLoadEnd={this.onLoadEnd.bind(this)}
        onError={this.onError.bind(this)}
        style={[styles.backgroundImage, style]}
        source={source}
        resizeMode={resizeMode}
        // borderRadius={borderRadius}
        borderRadius={8}>
        {this.state.isLoaded && !this.state.isError ? (
          children
        ) : (
          <View
            style={[
              styles.viewImageStyles,
              {borderRadius: borderRadius},
              backgroundColor ? {backgroundColor: backgroundColor} : {},
            ]}>
            {this.props.isShowActivity && !this.state.isError && (
              <ActivityIndicator
                style={styles.activityIndicator}
                size={loadingStyle ? loadingStyle.size : 'small'}
                color={loadingStyle ? loadingStyle.color : 'gray'}
              />
            )}
            <Image
              style={
                placeholderStyle
                  ? placeholderStyle
                  : [
                      styles.imagePlaceholderStyles,
                      customImagePlaceholderDefaultStyle,
                    ]
              }
              source={
                placeholderSource
                  ? placeholderSource
                  : require('../../assets/images/empty-image.png')
              }
            />
          </View>
        )}
        {this.props.children && (
          <View style={styles.viewChildrenStyles}>{this.props.children}</View>
        )}
      </ImageBackground>
    );
  }
}

export default ImageLoad;
