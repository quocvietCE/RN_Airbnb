import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '80%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: Colors.mainBg,
    borderRadius: 5,
  },
  titleErrorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  errorText: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
  },
  infoErrorBox: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  infoErrorText: {
    backgroundColor: 'rgba(255, 205, 0, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 205, 0, 1)',
    paddingHorizontal: 10,
    ...Fonts.style.normal,
    borderRadius: 5,
    color: Colors.error1,
    paddingVertical: 10,
  },
  btnNormal: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 4,
    backgroundColor: 'rgba(14, 115, 15, 1)',
  },
  txtBtnNormal: {
    ...Fonts.style.h5,
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
    lineHeight: 60,
    textAlign: 'center',
    color: Colors.snow,
  },
});
