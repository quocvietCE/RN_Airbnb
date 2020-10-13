import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ExploreContainer from './ExploreContainer';
import listingActions from '.././../store/actions/listingAction';

const {getListingData} = listingActions;

const mapStateToProps = (state) => ({
  listingData: state.listing.listingData,
  favouriteListings: state.listing.favouriteListings,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({getListingData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
