import React from 'react';
import PropTypes from 'prop-types';
import { useClosableLayerStyles } from './styles';
import { ErrorIcon } from '../../icons';
import { colors } from '../../constants/colors';

const ClosableLayer = ({ onClose, title, children }) => {
  const className = useClosableLayerStyles();
  return (
    <div className={className}>
      <div className='overlay' />
      <div className='container'>
        <div className='close-icon' onClick={onClose} >
          <ErrorIcon color={colors.grey90} />
        </div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

ClosableLayer.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ClosableLayer.defaultProps = {
  onClose: () => {},
  title: '',
};

export default ClosableLayer;
