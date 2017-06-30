import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../../../src/components/shared/Logo';

it('renders correctly', () => {
  const wrapper = shallow(<Logo />);

  expect(wrapper).toMatchSnapshot();
});
