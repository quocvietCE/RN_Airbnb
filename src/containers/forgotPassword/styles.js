import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1
    },
    forgotPasswordHeading: {
      fontSize: 28,
      color: colors.white,
      fontWeight: "300"
    },
    scrollViewWrapper: {
      marginTop: 70,
      flex: 1,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    scrollView: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      flex: 1
    },
    forgotPasswordSubheading: {
      color: colors.white,
      fontWeight: "600",
      fontSize: 15,
      marginTop: 10,
      marginBottom: 60
    },
    notificationWrapper: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0
    }
});

export default styles;