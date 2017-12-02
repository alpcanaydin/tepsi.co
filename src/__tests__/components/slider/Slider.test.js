import React from 'react';
import { shallow } from 'enzyme';

import Slider from '../../../components/slider/Slider';

it('renders correctly', () => {
  const wrapper = shallow(<Slider />);

  expect(wrapper).toMatchSnapshot();
});
