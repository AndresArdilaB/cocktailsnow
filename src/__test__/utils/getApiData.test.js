import { getData } from '../../frontend/utils/getApiData';
import CocktailListMock from '../../__mocks__/CocktailListMock';

describe('Fetch api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call api and return data', async () => {
    fetch.mockResponseOnce(JSON.stringify({ drinks: CocktailListMock }));

    await getData('ingredient', 'gin')
      .then((response) => {
        expect(response[0].idDrink).toEqual('14029');
      })
      .catch((error) => console.log(error));

    expect(fetch.mock.calls[0][0]).toEqual('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin');

  });
});
