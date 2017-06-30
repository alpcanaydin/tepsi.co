import React from 'react';
import { shallow } from 'enzyme';

import Slide3 from '../../../../src/components/slider/slides/Slide3';

it('renders correctly', () => {
  const wrapper = shallow(<Slide3 />);

  expect(wrapper).toMatchSnapshot();
});
