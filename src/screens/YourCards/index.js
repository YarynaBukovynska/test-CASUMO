import React from 'react';
import { ClosableLayer, Card } from '../../components';
import Header from './Header';
import CardsList from './CardsList';
import Footer from './Footer';
import { useYourCardsStyles } from './styles';
import { useYourCardsData } from './hooks';
import CardForm from '../../forms/CardForm';
import { FULL_CARD_INITIAL } from '../../constants/cards';

const YourCards = () => {
  const className = useYourCardsStyles();
  const {
    openWorkflow,
    isShowWorkflow,
    onClose,
    getMessage,
    onSubmit,
    isEdit,
    currentCard,
  } = useYourCardsData();
  return(
    <div className={className}>
      <Header />
      <CardsList />
      <Footer onClick={openWorkflow} />
      {isShowWorkflow && (
        <ClosableLayer
          onClose={onClose}
          title={isEdit ? getMessage('yourCards.edit') : getMessage('yourCards.addDetails')}
        >
          {
            isEdit && (
              <Card card={currentCard} isEdit={isEdit} />
            )
          }
          <CardForm
            card={isEdit ? currentCard : FULL_CARD_INITIAL}
            onSubmit={onSubmit}
            submitLabel={getMessage('general.confirm')}
          />
        </ClosableLayer>
      )}
    </div>
  );
};

export default YourCards;
