import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../../components/shared/Footer';

it('renders correctly', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});
