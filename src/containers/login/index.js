import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from './Login';
import authActions from '.././../store/actions/authAction';

const {login} = authActions;

const mapStateToProps = (state) => ({
  loggedInState: state.auth.loggedInState,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({login}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
