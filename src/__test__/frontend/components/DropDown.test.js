/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import FiltersMock from '../../../__mocks__/FiltersMock';
import DropDown from '../../../frontend/components/DropDown';

describe('<DropDown />', () => {

  test('Component render', () => {
    const dropDown = shallow(
      <ProviderMock>
        <DropDown />
      </ProviderMock>,
    );

    expect(dropDown.length).toEqual(1);
  });

  test('Test options list', () => {
    const wrapper = mount(
      <ProviderMock>
        <DropDown
          items={FiltersMock[0].items}
          label={FiltersMock[0].label}
          param={FiltersMock[0].param}
          callBack={() => { }}
        />
      </ProviderMock>,
    );

    expect(wrapper.find('[id="test"]')).toHaveLength(1);
  });

});

describe('DropDown Snapshot', () => {
  test('Testing render component UI', () => {
    const dropDown = create(
      <ProviderMock>
        <DropDown
          items={FiltersMock[0].items}
          label={FiltersMock[0].label}
          param={FiltersMock[0].param}
          callBack={() => { }}
        />
      </ProviderMock>,
    );

    expect(dropDown.toJSON()).toMatchSnapshot();
  });
});
