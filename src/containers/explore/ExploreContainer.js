import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/explore/Categories';
import {categoriesList} from '../../config/constants/hardData';
import Listings from '../../components/explore/Listings';
import styles from './styles';
import {propTypesArray} from '../../config/constants/defaultPropTypes';

class ExploreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteListings: [],
    };
    this.handleAddToFav = this.handleAddToFav.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.onCreateListClose = this.onCreateListClose.bind(this);
  }

  componentDidMount() {
    this.props.getListingData();
  }

  handleAddToFav(listing) {
    const {navigate} = this.props.navigation;
    console.log('listing: ', listing);
    let {favouriteListings} = this.state;

    const index = favouriteListings.indexOf(listing.id);
    console.log('index: ', index);
    if (index > -1) {
      favouriteListings = favouriteListings.filter(
        (item) => item !== listing.id,
      );
      console.log('favouriteListings: ', favouriteListings);
      this.setState({
        favouriteListings,
      });
    } else {
      navigate('CreateListStack', {
        listing,
        onCreateListClose: this.onCreateListClose,
      });
    }
  }

  onCreateListClose(listingId, listCreated) {
    console.log('onCreateListClose listingId: ', listingId);
    console.log('onCreateListClose listCreated: ', listCreated);
    let {favouriteListings} = this.state;
    if (listCreated) {
      favouriteListings.push(listingId);
    } else {
      favouriteListings = favouriteListings.filter(
        (item) => item !== listingId,
      );
    }
    console.log('onCreateListClose favouriteListings: ', favouriteListings);
    this.setState({favouriteListings});
  }

  renderListings() {
    const {listingData} = this.props;
    return listingData.map((listing, index) => {
      console.log('listing renderListings: ', listing);
      return (
        <View key={`listing-${index}`}>
          <Listings
            key={`listing-item-${index}`}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            showAddToFav={listing.showAddToFav}
            handleAddToFav={this.handleAddToFav}
            favouriteListings={this.state.favouriteListings}
          />
        </View>
      );
    });
  }

  render() {
    const {listingData} = this.props;
    console.log('ExploreContainer render listingData: ', listingData);
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.wrapper}>
          <SearchBar />
          <ScrollView
            style={styles.scrollview}
            contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.heading}>Explore Airbnb</Text>
            <View style={styles.categories}>
              <Categories categories={categoriesList} />
            </View>
            {this.renderListings()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

ExploreContainer.propTypes = {
  listingData: propTypesArray.isRequired,
  favouriteListings: propTypesArray.isRequired,
};

export default ExploreContainer;
