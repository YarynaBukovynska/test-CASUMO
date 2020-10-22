import React from 'react';
import PropTypes from 'prop-types';
import useCardStyles from './styles';
import { useCardData } from './hooks';
import { MasterCardLogo, VisaLogo, EditIcon, CardBackgroundIcon } from '../../icons';
import { CARD_TYPES } from '../../constants/cards';
import { colors } from '../../constants/colors';

const Card = ({ card, isEdit }) => {
  const className = useCardStyles();
  const { getMessage, handleClick, cardNumber } = useCardData(card.number);
  return (
    <div
      className={`${className} ${card.type} ${isEdit ? 'read-only' : ''}`}
      onClick={() => handleClick(card)}
    >
      <div>
        { card.type === CARD_TYPES.MASTERCARD
          ? (<MasterCardLogo />)
          : (<VisaLogo />)
        }
        <div className='top-box'>
          <div>
            <span className='top-box_title'>{getMessage('general.cvc')}</span>
            <span className='top-box_data'>{card.securityCode}</span>
          </div>
          <div>
            <span className='top-box_title'>{getMessage('general.expires').toUpperCase()}</span>
            <span className='top-box_data'>{card.expiryDate}</span>
          </div>
        </div>
      </div>
      <div className='bottom-box'>
        <div>
          <div className='bottom-box_title'>{card.name}</div>
          <div className='bottom-box_data'>{cardNumber}</div>
        </div>
        {
          !isEdit && (
            <EditIcon />
        )}
      </div>
      <div className='background-box'>
        <CardBackgroundIcon color={card.type === CARD_TYPES.MASTERCARD ? colors.purple90 : colors.grey50}/>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  isEdit: PropTypes.bool,
};

Card.defaultProps = {
  isEdit: false,
};

export default Card;
