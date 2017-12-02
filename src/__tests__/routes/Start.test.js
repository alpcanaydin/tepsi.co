import React from 'react';
import { shallow } from 'enzyme';

import Start from '../../routes/Start';

it('renders correctly', () => {
  const wrapper = shallow(<Start />);

  expect(wrapper).toMatchSnapshot();
});
