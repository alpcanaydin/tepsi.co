import React from 'react';
import { shallow } from 'enzyme';

import Content from '../../../src/components/shared/Content';

it('renders correctly', () => {
  const wrapper = shallow(
    <Content>
      <h1>Content</h1>
    </Content>,
  );

  expect(wrapper).toMatchSnapshot();
});
