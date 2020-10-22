import React from 'react';
import PropTypes from 'prop-types';
import { useMessages } from '../hooks';

const Button = ({ onClick }) => {
  const getMessage = useMessages();
  return (
    <button onClick={onClick}>{getMessage('yourCards.addNew')}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
