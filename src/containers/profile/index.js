import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Profile from './Profile';
import authActions from '.././../store/actions/authAction';

const {logout} = authActions;

const mapStateToProps = (state) => ({
  loggedInState: state.auth.loggedInState,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({logout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
