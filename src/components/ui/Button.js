import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ primary, secondary, children, ...otherProps }) => {
  const classNames = ['Button'];

  if (primary) {
    classNames.push('Button--primary');
  }

  if (secondary) {
    classNames.push('Button--secondary');
  }

  return (
    <button className={classNames.join(' ')} {...otherProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  primary: undefined,
  secondary: undefined,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
