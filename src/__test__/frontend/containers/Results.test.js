import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../../__mocks__/ProviderMock';
import Results from '../../../frontend/containers/Results';

describe('<Results />', () => {

  test('Component render', () => {
    const results = shallow(
      <ProviderMock>
        <Results />
      </ProviderMock>,
    );

    expect(results.length).toEqual(1);
  });

});

describe('Results Snapshot', () => {

  test('Testing the Results UI component', () => {
    const results = create(
      <ProviderMock>
        <Results
          match={{ params: {} }}
        />
      </ProviderMock>,
    );
    expect(results.toJSON()).toMatchSnapshot();
  });
});
