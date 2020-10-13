import {colors} from '../../themes';

const listing1Photo = require('../../assets/images/photos/listing1.png');
const listing2Photo = require('../../assets/images/photos/listing2.png');
const listing3Photo = require('../../assets/images/photos/listing3.png');
const listing4Photo = require('../../assets/images/photos/listing4.png');
const listing5Photo = require('../../assets/images/photos/listing5.png');
const listing6Photo = require('../../assets/images/photos/listing6.png');
const listing7Photo = require('../../assets/images/photos/listing7.png');
const listing8Photo = require('../../assets/images/photos/listing8.png');
const listing9Photo = require('../../assets/images/photos/listing9.png');
const listing10Photo = require('../../assets/images/photos/listing10.png');
const listing11Photo = require('../../assets/images/photos/listing11.png');
const listing12Photo = require('../../assets/images/photos/listing12.png');
const listing13Photo = require('../../assets/images/photos/listing13.png');
const listing14Photo = require('../../assets/images/photos/listing14.png');
const listing15Photo = require('../../assets/images/photos/listing15.png');
const listing16Photo = require('../../assets/images/photos/listing16.png');

//https://i.ibb.co/c6k36zD/listing1.png
//https://i.ibb.co/9G63tbC/listing2.png
//https://i.ibb.co/LQYBnLx/listing3.png
//https://i.ibb.co/4KN1kqF/listing4.png
//https://i.ibb.co/jz5k4N9/listing5.png
//https://i.ibb.co/yY6KF1z/listing6.png
//https://i.ibb.co/z4Y3XLn/listing7.png
//https://i.ibb.co/SJzv9sC/listing8.png
//https://i.ibb.co/ckHWpS2/listing9.png
//https://i.ibb.co/8xT4VH2/listing10.png
//https://i.ibb.co/4f8C4Fs/listing11.png
//https://i.ibb.co/Tk3pWd8/listing12.png
//https://i.ibb.co/WWJbyg9/listing13.png
//https://i.ibb.co/PDB1pTj/listing14.png
//https://i.ibb.co/BKhv927/listing15.png
//https://i.ibb.co/y8902Kn/listing16.png

//https://i.ibb.co/VH9Tnrf/homes-Category.png
//https://i.ibb.co/Jy7d4z6/experiences-Category.png
//https://i.ibb.co/NVqS3xZ/restaurants-Category.png

const listings = [
  {
    title: 'Experiences',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: listing1Photo,
        type: 'BOAT RIDE',
        title: "Sail past Japan's largest port with a certified skipper",
        location: 'Tokyo, Japan',
        price: 60,
        priceType: 'per person',
        stars: 29,
        color: colors.gray04,
      },
      {
        id: 2,
        photo: listing2Photo,
        type: 'CHEESE TASTING',
        title: 'Funny cheesemonger takes you on a Tour de Fromage',
        location: 'Paris, France',
        price: 70,
        priceType: 'per person',
        stars: 4,
        color: colors.darkOrange,
      },
      {
        id: 3,
        photo: listing3Photo,
        type: 'BIKE RIDE',
        title: 'Cycling, "KFC" & Drinking for your Seoul',
        location: 'Seoul, South Korea',
        price: 47,
        priceType: 'per person',
        stars: 30,
        color: colors.black,
      },
      {
        id: 4,
        photo: listing4Photo,
        type: 'BIKE RIDE',
        title: 'Cycle through side streets with a local',
        location: 'Amsterdam, Netherlands',
        price: 57,
        priceType: 'per person',
        stars: 70,
        color: colors.brown01,
      },
      {
        id: 5,
        photo: listing5Photo,
        type: 'SURFING',
        title: "Surf Bondi's waves, then eat & drink like a local",
        location: 'Sydney, Australia',
        price: 61,
        priceType: 'per person',
        stars: 66,
        color: colors.blue,
      },
      {
        id: 6,
        photo: listing6Photo,
        type: 'DRAWING CLASS',
        title: 'A drawing/walking tour in Montmartre',
        location: 'Paris, France',
        price: 55,
        priceType: 'per person',
        stars: 15,
        color: colors.brown02,
      },
    ],
  },
  {
    title: 'Homes',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 7,
        photo: listing7Photo,
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        location: 'Bali, Indonesia',
        price: 72,
        priceType: 'per night',
        stars: 101,
        color: colors.green01,
      },
      {
        id: 8,
        photo: listing8Photo,
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        location: 'Secarias, Portugal',
        price: 69,
        priceType: 'per night',
        stars: 119,
        color: colors.brown01,
      },
      {
        id: 9,
        photo: listing9Photo,
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        location: 'Cazadero, United States',
        price: 152,
        priceType: 'per night',
        stars: 320,
        color: colors.darkOrange,
      },
      {
        id: 10,
        photo: listing10Photo,
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        location: 'Denver, United States',
        price: 116,
        priceType: 'per night',
        stars: 300,
        color: colors.gray04,
      },
      {
        id: 11,
        photo: listing11Photo,
        type: 'ENTIRE BOAT - 2 BEDS',
        title: "A Pirate's Life for Me Houseboar!",
        location: 'Charleston, United States',
        price: 182,
        priceType: 'per night',
        stars: 132,
        color: colors.green01,
      },
    ],
  },
  {
    title: 'Popular Reservations',
    boldTitle: true,
    showAddToFav: false,
    listings: [
      {
        id: 12,
        photo: listing12Photo,
        type: 'RESERVATION',
        title: "G'raj Mahal",
        price: '30',
        priceType: 'per person',
        stars: 0,
        color: colors.blue,
      },
      {
        id: 13,
        photo: listing13Photo,
        type: 'RESERVATION',
        title: 'Le Fond',
        price: '30',
        priceType: 'per person',
        stars: 0,
        color: colors.black,
      },
      {
        id: 14,
        photo: listing14Photo,
        type: 'RESERVATION',
        title: 'The Glass Onion',
        price: '34',
        priceType: 'per person',
        stars: 0,
        color: colors.brown01,
      },
      {
        id: 15,
        photo: listing15Photo,
        type: 'RESERVATION',
        title: 'The Waiting Room',
        price: '34',
        priceType: 'per person',
        stars: 0,
        color: colors.green01,
      },
      {
        id: 16,
        photo: listing16Photo,
        type: 'RESERVATION',
        title: 'Bar Boulud',
        price: '46',
        priceType: 'per person',
        stars: 0,
        color: colors.gray04,
      },
    ],
  },
];

const categoriesList = [
  {
    name: 'Homes',
    photo: require('../../assets/images/photos/homesCategory.png'),
  },
  {
    name: 'Experiences',
    photo: require('../../assets/images/photos/experiencesCategory.png'),
  },
  {
    name: 'Restaurants',
    photo: require('../../assets/images/photos/restaurantsCategory.png'),
  },
];

export default categoriesList;

export {listings, categoriesList};

// {
//   "data": [
//    {
//      title: "Experiences",
//      boldTitle: false,
//      showAddToFav: true,
//      listings: [
//        {
//          id: 1,
//          photo: "https://i.ibb.co/c6k36zD/listing1.png",
//          type: "BOAT RIDE",
//          title: "Sail past Japan's largest port with a certified skipper",
//          location: "Tokyo, Japan",
//          price: 60,
//          priceType: "per person",
//          stars: 29,
//          color: "#484848",
//        },
//        {
//          id: 2,
//          photo: "https://i.ibb.co/9G63tbC/listing2.png",
//          type: 'CHEESE TASTING',
//          title: 'Funny cheesemonger takes you on a Tour de Fromage',
//          location: 'Paris, France',
//          price: 70,
//          priceType: 'per person',
//          stars: 4,
//          color: "#d93900",
//        },
//        {
//          id: 3,
//          photo: "https://i.ibb.co/LQYBnLx/listing3.png",
//          type: 'BIKE RIDE',
//          title: 'Cycling, "KFC" & Drinking for your Seoul',
//          location: 'Seoul, South Korea',
//          price: 47,
//          priceType: 'per person',
//          stars: 30,
//          color: "#000000",
//        },
//        {
//          id: 4,
//          photo: 'https://i.ibb.co/4KN1kqF/listing4.png',
//          type: 'BIKE RIDE',
//          title: 'Cycle through side streets with a local',
//          location: 'Amsterdam, Netherlands',
//          price: 57,
//          priceType: 'per person',
//          stars: 70,
//          color: "#ad8763",
//        },
//        {
//          id: 5,
//          photo: "https://i.ibb.co/jz5k4N9/listing5.png",
//          type: "SURFING",
//          title: "Surf Bondi's waves, then eat & drink like a local",
//          location: 'Sydney, Australia',
//          price: 61,
//          priceType: 'per person',
//          stars: 66,
//          color: "#4995cd",
//        },
//        {
//          id: 6,
//          photo: 'https://i.ibb.co/yY6KF1z/listing6.png',
//          type: 'DRAWING CLASS',
//          title: 'A drawing/walking tour in Montmartre',
//          location: 'Paris, France',
//          price: 55,
//          priceType: 'per person',
//          stars: 15,
//          color: "#7d4918",
//        },
//      ],
//    },
//    {
//      title: "Homes",
//      boldTitle: false,
//      showAddToFav: true,
//      listings: [
//        {
//          id: 7,
//          photo: 'https://i.ibb.co/z4Y3XLn/listing7.png',
//          type: 'ENTIRE HOUSE - 1 BED',
//          title: 'BALIAN TREEHOUSE with beautiful pool',
//          location: 'Bali, Indonesia',
//          price: 72,
//          priceType: 'per night',
//          stars: 101,
//          color: "#008388",
//        },
//        {
//          id: 8,
//          photo: 'https://i.ibb.co/SJzv9sC/listing8.png',
//          type: 'ENTIRE VILLA - 3 BEDS',
//          title: 'Casa de Rio - Beach and Mountains',
//          location: 'Secarias, Portugal',
//          price: 69,
//          priceType: 'per night',
//          stars: 119,
//          color: "#ad8763",
//        },
//        {
//          id: 9,
//          photo: 'https://i.ibb.co/ckHWpS2/listing9.png',
//          type: 'ENTIRE HOUSE - 1 BED',
//          title: 'Cozy A-Frame Cabin in the Redwoods',
//          location: 'Cazadero, United States',
//          price: 152,
//          priceType: 'per night',
//          stars: 320,
//          color: "#d93900",
//        },
//        {
//          id: 10,
//          photo: 'https://i.ibb.co/8xT4VH2/listing10.png',
//          type: 'ENTIRE GUESTHOUSE - 1 BED',
//          title: '1880s Carriage House in Curtis Park',
//          location: 'Denver, United States',
//          price: 116,
//          priceType: 'per night',
//          stars: 300,
//          color: "#484848",
//        },
//        {
//          id: 11,
//          photo: 'https://i.ibb.co/4f8C4Fs/listing11.png',
//          type: 'ENTIRE BOAT - 2 BEDS',
//          title: "A Pirate's Life for Me Houseboar!",
//          location: 'Charleston, United States',
//          price: 182,
//          priceType: 'per night',
//          stars: 132,
//          color: "#008388",
//        },
//      ],
//    },
//    {
//      title: 'Popular Reservations',
//      boldTitle: true,
//      showAddToFav: false,
//      listings: [
//        {
//          id: 12,
//          photo: 'https://i.ibb.co/Tk3pWd8/listing12.png',
//          type: 'RESERVATION',
//          title: "G'raj Mahal",
//          price: '30',
//          priceType: 'per person',
//          stars: 0,
//          color: "#4995cd",
//        },
//        {
//          id: 13,
//          photo: 'https://i.ibb.co/WWJbyg9/listing13.png',
//          type: 'RESERVATION',
//          title: 'Le Fond',
//          price: '30',
//          priceType: 'per person',
//          stars: 0,
//          color: "#000000",
//        },
//        {
//          id: 14,
//          photo: 'https://i.ibb.co/PDB1pTj/listing14.png',
//          type: 'RESERVATION',
//          title: 'The Glass Onion',
//          price: '34',
//          priceType: 'per person',
//          stars: 0,
//          color: "#ad8763",
//        },
//        {
//          id: 15,
//          photo: 'https://i.ibb.co/BKhv927/listing15.png',
//          type: 'RESERVATION',
//          title: 'The Waiting Room',
//          price: '34',
//          priceType: 'per person',
//          stars: 0,
//          color: "#008388",
//        },
//        {
//          id: 16,
//          photo: 'https://i.ibb.co/y8902Kn/listing16.png',
//          type: 'RESERVATION',
//          title: 'Bar Boulud',
//          price: '46',
//          priceType: 'per person',
//          stars: 0,
//          color: "#484848",
//        },
//      ],
//    },
//  ]
//  }

// {
//   "data": [
//    {
//      "title": "Experiences",
//      "boldTitle": false,
//      "showAddToFav": true,
//      "listings": [
//        {
//          "id": 1,
//          "photo": "https://i.ibb.co/c6k36zD/listing1.png",
//          "type": "BOAT RIDE",
//          "title": "Sail past Japan's largest port with a certified skipper",
//          "location": "Tokyo, Japan",
//          "price": 60,
//          "priceType": "per person",
//          "stars": 29,
//          "color": "#484848"
//        },
//        {
//          "id": 2,
//          "photo": "https://i.ibb.co/9G63tbC/listing2.png",
//          "type": "CHEESE TASTING",
//          "title": "Funny cheesemonger takes you on a Tour de Fromage",
//          "location": "Paris, France",
//          "price": 70,
//          "priceType": "per person",
//          "stars": 4,
//          "color": "#d93900"
//        },
//        {
//          "id": 3,
//          "photo": "https://i.ibb.co/LQYBnLx/listing3.png",
//          "type": "BIKE RIDE",
//          "title": "Cycling, \"KFC\" & Drinking for your Seoul",
//          "location": "Seoul, South Korea",
//          "price": 47,
//          "priceType": "per person",
//          "stars": 30,
//          "color": "#000000"
//        },
//        {
//          "id": 4,
//          "photo": "https://i.ibb.co/4KN1kqF/listing4.png",
//          "type": "BIKE RIDE",
//          "title": "Cycle through side streets with a local",
//          "location": "Amsterdam, Netherlands",
//          "price": 57,
//          "priceType": "per person",
//          "stars": 70,
//          "color": "#ad8763"
//        },
//        {
//          "id": 5,
//          "photo": "https://i.ibb.co/jz5k4N9/listing5.png",
//          "type": "SURFING",
//          "title": "Surf Bondi's waves, then eat & drink like a local",
//          "location": "Sydney, Australia",
//          "price": 61,
//          "priceType": "per person",
//          "stars": 66,
//          "color": "#4995cd"
//        },
//        {
//          "id": 6,
//          "photo": "https://i.ibb.co/yY6KF1z/listing6.png",
//          "type": "DRAWING CLASS",
//          "title": "A drawing/walking tour in Montmartre",
//          "location": "Paris, France",
//          "price": 55,
//          "priceType": "per person",
//          "stars": 15,
//          "color": "#7d4918"
//        }
//      ]
//    },
//    {
//      "title": "Homes",
//      "boldTitle": false,
//      "showAddToFav": true,
//      "listings": [
//        {
//          "id": 7,
//          "photo": "https://i.ibb.co/z4Y3XLn/listing7.png",
//          "type": "ENTIRE HOUSE - 1 BED",
//          "title": "BALIAN TREEHOUSE with beautiful pool",
//          "location": "Bali, Indonesia",
//          "price": 72,
//          "priceType": "per night",
//          "stars": 101,
//          "color": "#008388"
//        },
//        {
//          "id": 8,
//          "photo": "https://i.ibb.co/SJzv9sC/listing8.png",
//          "type": "ENTIRE VILLA - 3 BEDS",
//          "title": "Casa de Rio - Beach and Mountains",
//          "location": "Secarias, Portugal",
//          "price": 69,
//          "priceType": "per night",
//          "stars": 119,
//          "color": "#ad8763"
//        },
//        {
//          "id": 9,
//          "photo": "https://i.ibb.co/ckHWpS2/listing9.png",
//          "type": "ENTIRE HOUSE - 1 BED",
//          "title": "Cozy A-Frame Cabin in the Redwoods",
//          "location": "Cazadero, United States",
//          "price": 152,
//          "priceType": "per night",
//          "stars": 320,
//          "color": "#d93900"
//        },
//        {
//          "id": 10,
//          "photo": "https://i.ibb.co/8xT4VH2/listing10.png",
//          "type": "ENTIRE GUESTHOUSE - 1 BED",
//          "title": "1880s Carriage House in Curtis Park",
//          "location": "Denver, United States",
//          "price": 116,
//          "priceType": "per night",
//          "stars": 300,
//          "color": "#484848"
//        },
//        {
//          "id": 11,
//          "photo": "https://i.ibb.co/4f8C4Fs/listing11.png",
//          "type": "ENTIRE BOAT - 2 BEDS",
//          "title": "A Pirate's Life for Me Houseboar!",
//          "location": "Charleston, United States",
//          "price": 182,
//          "priceType": "per night",
//          "stars": 132,
//          "color": "#008388"
//        }
//      ]
//    },
//     {
//      "title": "Popular Reservations",
//      "boldTitle": true,
//      "showAddToFav": false,
//      "listings": [
//        {
//          "id": 12,
//          "photo": "https://i.ibb.co/Tk3pWd8/listing12.png",
//          "type": "RESERVATION",
//          "title": "G'raj Mahal",
//          "price": 30,
//          "priceType": "per person",
//          "stars": 0,
//          "color": "#4995cd"
//        },
//        {
//          "id": 13,
//          "photo": "https://i.ibb.co/WWJbyg9/listing13.png",
//          "type": "RESERVATION",
//          "title": "Le Fond",
//          "price": 30,
//          "priceType": "per person",
//          "stars": 0,
//          "color": "#000000"
//        },
//        {
//          "id": 14,
//          "photo": "https://i.ibb.co/PDB1pTj/listing14.png",
//          "type": "RESERVATION",
//          "title": "The Glass Onion",
//          "price": 34,
//          "priceType": "per person",
//          "stars": 0,
//          "color": "#ad8763"
//        },
//        {
//          "id": 15,
//          "photo": "https://i.ibb.co/BKhv927/listing15.png",
//          "type": "RESERVATION",
//          "title": "The Waiting Room",
//          "price": 34,
//          "priceType": "per person",
//          "stars": 0,
//          "color": "#008388"
//        },
//        {
//          "id": 16,
//          "photo": "https://i.ibb.co/y8902Kn/listing16.png",
//          "type": "RESERVATION",
//          "title": "Bar Boulud",
//          "price": 46,
//          "priceType": "per person",
//          "stars": 0,
//          "color": "#484848"
//        }
//      ]
//    }
//  ]
//  }
