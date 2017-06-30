import React from 'react';
import { shallow } from 'enzyme';

import Slide1 from '../../../../src/components/slider/slides/Slide1';

it('renders correctly', () => {
  const wrapper = shallow(<Slide1 />);

  expect(wrapper).toMatchSnapshot();
});
