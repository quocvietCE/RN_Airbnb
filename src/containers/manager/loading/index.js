import {connect} from 'react-redux';
import Loading from './Loading';

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading,
});

export default connect(mapStateToProps, null)(Loading);
