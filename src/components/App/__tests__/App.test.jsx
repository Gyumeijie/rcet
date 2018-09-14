import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../App';

describe('Component: <App/>', () => {
  it('renders properly', () => {
    const app = shallow(
      <App />
    );

    expect(app.text()).toEqual('Hello World');
  })
});