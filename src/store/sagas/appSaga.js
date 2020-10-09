import {put, all, race, select, call} from 'redux-saga/effects';
import {APP_ACTION} from '../actionTypes';
import {} from '../../services/auth';
import SYSTEM_POPUP from '../../config/constants/systemErrorTypes';

function* handleGetConfigurationApp() {
  try {
    // const {countryCode, languageCode} = yield select((state) => state.app);
    // const culture =
    //   languageCode === 'en' ? 'en-US' : `${languageCode}-${countryCode}`;
    // const response = yield getConfigurationApp(countryCode);
    // const adverts = yield getAdvertDescription(countryCode, culture);
    // const settingsData = parseSettingsToObj(response.data);
    // if (response.isSuccess) {
    //   yield put({
    //     type: APP_ACTION.GET_CONFIGURATION_APP_SUCCESS,
    //     data: settingsData,
    //     advertInfo: adverts.data,
    //   });
    // }
  } catch (error) {
    yield put({
      type: APP_ACTION.GET_CONFIGURATION_APP_FAIL,
      error: {
        type: SYSTEM_POPUP.GENERAL,
        error: error.data.error,
      },
    });
    return error;
  }
}
const appSaga = {
  handleGetConfigurationApp,
};

export default appSaga;
