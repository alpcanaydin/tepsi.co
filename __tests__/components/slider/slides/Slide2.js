import React from 'react';
import { shallow } from 'enzyme';

import Slide2 from '../../../../src/components/slider/slides/Slide2';

it('renders correctly', () => {
  const wrapper = shallow(<Slide2 />);

  expect(wrapper).toMatchSnapshot();
});
