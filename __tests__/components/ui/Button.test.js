import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../src/components/ui/Button';

it('renders correctly primary button', () => {
  const wrapper = shallow(<Button primary>Button</Button>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(<Button secondary>Button</Button>);

  expect(wrapper).toMatchSnapshot();
});

it('passes other props to button.', () => {
  const wrapper = shallow(<Button type="submit">Button</Button>);
  expect(wrapper.prop('type')).toBe('submit');
});
