import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components';

const Footer = ({ onClick }) => {
  return(
    <div className='footer'>
      <Button onClick={onClick} />
    </div>
  );
};

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Footer;
