import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../../frontend/components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Footer component render', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer correct text', () => {
    expect(footer.find('.footer').text()).toEqual('From Andres Ardila for Platzi - 2020');
  });
});

describe('Footer Snapshot', () => {

  test('Testing the footer UI component', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
