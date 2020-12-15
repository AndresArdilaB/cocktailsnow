import { filterByName, orderByName } from '../../frontend/actions';

describe('Actions', () => {
  test('Filter by name', () => {
    const expected = {
      type: 'FILTER_BY_NAME',
      payload: 'Belmont',
    };

    expect(filterByName('Belmont')).toEqual(expected);
  });

  test('Order by name', () => {
    const expected = {
      type: 'ORDER_BY_NAME',
      payload: 'desc',
    };

    expect(orderByName('desc')).toEqual(expected);
  });
});
