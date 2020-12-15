import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import Header from '../../../frontend/components/Header';

describe('<Header />', () => {
  const header = mount(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );

  test('Header component render', () => {
    expect(header.length).toEqual(1);
  });

});

describe('Header Snapshot', () => {

  test('Testing the Header UI component', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
