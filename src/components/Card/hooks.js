import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useMessages } from '../../hooks';
import { setCurrentCard, setShowWorkflow } from '../../action-creators/cards';
import { generateCardNumberForView } from '../../utils';

export const useCardData = (number) => {
  const getMessage = useMessages();
  const dispatch = useDispatch();
  const cardNumber = generateCardNumberForView(number);
  const handleClick = useCallback((card) => {
    const transformedCard = {
      ...card,
      number: generateCardNumberForView(card.number)
    };
    dispatch(setCurrentCard(transformedCard));
    dispatch(setShowWorkflow(true));
  }, [dispatch]);
  return {
    getMessage,
    handleClick,
    cardNumber,
  }
};
