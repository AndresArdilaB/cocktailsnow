import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import NotFound from '../../../frontend/containers/NotFound';

describe('<NotFound />', () => {

  test('Component render', () => {
    const notFound = shallow(
      <ProviderMock>
        <NotFound />
      </ProviderMock>,
    );

    expect(notFound.length).toEqual(1);
  });

});

describe('NotFound Snapshot', () => {

  test('Testing the NotFound UI component', () => {
    const notFound = create(<NotFound />);
    expect(notFound.toJSON()).toMatchSnapshot();
  });
});
