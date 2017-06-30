import React from 'react';
import PropTypes from 'prop-types';

const Content = props => <main>{props.children}</main>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
