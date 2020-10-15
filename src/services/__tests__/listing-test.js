import mockAxios from 'axios';

import {getListing} from '../listing';

jest.mock('axios');

const dataMock = [
  {
    title: 'Experiences',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: 'https://i.ibb.co/c6k36zD/listing1.png',
        type: 'BOAT RIDE',
        title: "Sail past Japan's largest port with a certified skipper",
        location: 'Tokyo, Japan',
        price: 60,
        priceType: 'per person',
        stars: 29,
        color: '#484848',
      },
    ],
  },
];

it('fetches listing data from API', async () => {
  // setup
  mockAxios.get.mockImplementation(() =>
    Promise.resolve({
      data: dataMock,
    }),
  );

  // work
  const listingData = await getListing();

  // expect
  expect(listingData).toEqual(dataMock);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
