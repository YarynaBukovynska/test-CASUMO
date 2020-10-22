import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';
import { fromState } from './index';

export const selectCards = fromState('cards.cards');
export const selectCurrentCard = fromState('cards.currentCard');
export const selectIsShowWorkflow = fromState('cards.showWorkflow');
export const selectIsCurrentCard = createSelector(
  selectCurrentCard,
  card => !isEmpty(card)
);
