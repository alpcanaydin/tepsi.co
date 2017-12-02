import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../../../components/shared/Logo';

it('renders correctly', () => {
  const wrapper = shallow(<Logo />);

  expect(wrapper).toMatchSnapshot();
});
