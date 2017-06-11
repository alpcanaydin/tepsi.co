import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/App';

it('renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
