import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import Layout from '../../../frontend/components/Layout';

describe('<Layout />', () => {
  const layout = mount(
    <ProviderMock>
      <Layout />
    </ProviderMock>,
  );

  test('Layout component render', () => {
    expect(layout.length).toEqual(1);
  });

});

describe('Layout Snapshot', () => {

  test('Testing the layout UI component', () => {
    const layout = create(
      <ProviderMock>
        <Layout />
      </ProviderMock>,
    );
    expect(layout.toJSON()).toMatchSnapshot();
  });
});
