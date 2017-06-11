import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../src/routes/Home';

it('renders correctly', () => {
  const wrapper = shallow(<Home />);

  expect(wrapper).toMatchSnapshot();
});
