import React from 'react';
import { useMessages } from '../../hooks';

const Header = () => {
  const getMessage = useMessages();
  return (
    <div className='header'>
      <h3>{getMessage('yourCards')}</h3>
      <span>{getMessage('yourCards.info')}</span>
    </div>
  );
};

export default Header;
