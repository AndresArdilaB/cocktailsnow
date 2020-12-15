import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import Home from '../../../frontend/containers/Home';

describe('<Home />', () => {

  test('Component render', () => {
    const home = shallow(
      <ProviderMock>
        <Home />
      </ProviderMock>,
    );

    expect(home.length).toEqual(1);
  });

});

describe('Home Snapshot', () => {

  test('Testing the home UI component', () => {
    const home = create(
      <ProviderMock>
        <Home />
      </ProviderMock>,
    );
    expect(home.toJSON()).toMatchSnapshot();
  });
});
