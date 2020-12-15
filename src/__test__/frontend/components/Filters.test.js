/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import FiltersMock from '../../../__mocks__/FiltersMock';
import Filters from '../../../frontend/components/Filters';

describe('<Filters />', () => {

  test('Component render', () => {
    const filters = shallow(
      <ProviderMock>
        <Filters />
      </ProviderMock>,
    );

    expect(filters.length).toEqual(1);
  });

});

describe('Filters Snapshot', () => {
  test('Testing render component UI', () => {
    const filter = create(
      <ProviderMock>
        <Filters
          filters={FiltersMock}
          isHome={true}
          filterByName={() => { }}
          orderByName={() => { }}
        />
      </ProviderMock>,
    );

    expect(filter.toJSON()).toMatchSnapshot();
  });
});
