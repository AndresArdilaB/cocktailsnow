/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import CocktailListItemMock from '../../../__mocks__/CocktailListItemMock';
import CocktailDetail from '../../../frontend/components/CocktailDetail';

describe('<CocktailDetail />', () => {

  test('Component render', () => {
    const cocktailDetail = shallow(
      <ProviderMock>
        <CocktailDetail />
      </ProviderMock>,
    );

    expect(cocktailDetail.length).toEqual(1);
  });

  test('Test detail', () => {
    const wrapper = mount(
      <ProviderMock>
        <CocktailDetail
          data={{ data: CocktailListItemMock, type: 'Detail' }}
        />
      </ProviderMock>,
    );

    expect(wrapper.find('[id="Lunch Box"]')).toHaveLength(1);
  });

});

describe('CocktailDetail Snapshot', () => {
  test('Testing render component UI', () => {
    const cocktailDetail = create(
      <ProviderMock>
        <CocktailDetail
          data={{ data: CocktailListItemMock, type: 'Detail' }}
        />
      </ProviderMock>,
    );

    expect(cocktailDetail.toJSON()).toMatchSnapshot();
  });
});
