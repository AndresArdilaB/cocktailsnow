import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import Cocktail from '../../../frontend/containers/Cocktail';

describe('<Cocktail />', () => {

  test('Component render', () => {
    const cocktail = shallow(
      <ProviderMock>
        <Cocktail />
      </ProviderMock>,
    );

    expect(cocktail.length).toEqual(1);
  });

});

describe('Cocktail Snapshot', () => {

  test('Testing the home UI component', () => {
    const cocktail = create(
      <ProviderMock>
        <Cocktail
          match={{ params: {} }}
        />
      </ProviderMock>,
    );
    expect(cocktail.toJSON()).toMatchSnapshot();
  });
});
