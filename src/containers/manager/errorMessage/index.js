import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ErrorMessage from './errorMessage';
import appActions from '.././../../store/actions/appAction';

const {clearError} = appActions;

const mapStateToProps = (state) => ({
  languageCode: state.app.languageCode,
  errorObject: state.app.errorObject,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearError,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
