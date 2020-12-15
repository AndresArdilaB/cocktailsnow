import reducer from '../../frontend/reducers';

describe('Reducers', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('FILTER_BY_NAME', () => {
    const initialState = {
      cocktailName: '',
    };
    const action = {
      type: 'FILTER_BY_NAME',
      payload: 'Belmont',
    };

    const expected = {
      cocktailName: 'Belmont',
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
