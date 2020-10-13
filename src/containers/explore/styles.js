import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  scrollview: {
    paddingTop: 100,
  },
});

export default styles;
