/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import CocktailListMock from '../../../__mocks__/CocktailListMock';
import CocktailList from '../../../frontend/components/CocktailList';

describe('<CocktailList />', () => {

  test('Component render', () => {
    const cocktailList = shallow(
      <ProviderMock>
        <CocktailList />
      </ProviderMock>,
    );

    expect(cocktailList.length).toEqual(1);
  });

  test('Test cocktail list', () => {
    const wrapper = mount(
      <ProviderMock>
        <CocktailList items={CocktailListMock} />
      </ProviderMock>,
    );

    expect(wrapper.find('[id="14029"]')).toHaveLength(1);
  });

});

describe('CockailList Snapshot', () => {
  test('Testiong render component UI', () => {
    const cocktailList = create(
      <ProviderMock>
        <CocktailList items={CocktailListMock} />
      </ProviderMock>,
    );

    expect(cocktailList.toJSON()).toMatchSnapshot();
  });
});
