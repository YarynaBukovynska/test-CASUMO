import React from 'react';
import { Card } from '../../components';
import { useSelector } from 'react-redux';
import { selectCards } from '../../selectors/cards';

const CardsList = () => {
  const cards = useSelector(selectCards);
  return(
    <div className='cards-list'>
      { cards.map((item) => (
        <Card
          key={item.id}
          card={item}
        />
      ))}
    </div>
  );
};

export default CardsList;
