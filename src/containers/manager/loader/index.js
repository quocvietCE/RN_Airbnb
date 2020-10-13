import {connect} from 'react-redux';
import Loader from './Loader';

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading,
});

export default connect(mapStateToProps, null)(Loader);
