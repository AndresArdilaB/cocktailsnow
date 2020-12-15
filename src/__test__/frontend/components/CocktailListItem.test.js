/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import CocktailListItemMock from '../../../__mocks__/CocktailListItemMock';
import CocktailListItem from '../../../frontend/components/CocktailListItem';

describe('<CocktailListItem />', () => {

  test('Component render', () => {
    const cocktailListItem = shallow(
      <ProviderMock>
        <CocktailListItem />
      </ProviderMock>,
    );

    expect(cocktailListItem.length).toEqual(1);
  });

  test('Test cocktail detail', () => {
    const wrapper = mount(
      <ProviderMock>
        <CocktailListItem
          {...CocktailListItemMock}
        />
      </ProviderMock>,
    );

    wrapper.find('Link').simulate('click');
    expect(wrapper.find('Link').at(0).props().to).toBe(`/cocktail/${CocktailListItemMock.idDrink}`);
  });

});

describe('CockailListItem Snapshot', () => {
  test('Testiong render component UI', () => {
    const cocktailListItem = create(
      <ProviderMock>
        <CocktailListItem />
      </ProviderMock>,
    );

    expect(cocktailListItem.toJSON()).toMatchSnapshot();
  });
});
