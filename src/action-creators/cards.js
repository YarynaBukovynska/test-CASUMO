import {
  SAVE_CARD,
  SET_CURRENT_CARD,
  CLEAR_CURRENT_CARD,
  SET_SHOW_WORKFLOW,
  INIT_YOUR_CARDS_PAGE,
} from '../action-types/cards';

export const saveCard = data => ({
  type: SAVE_CARD,
  data,
});

export const setCurrentCard = data => ({
  type: SET_CURRENT_CARD,
  data,
});

export const clearCurrentCard = data => ({
  type: CLEAR_CURRENT_CARD,
  data,
});

export const setShowWorkflow = data => ({
  type: SET_SHOW_WORKFLOW,
  data,
});

export const initYourCardsPage = () => ({
  type: INIT_YOUR_CARDS_PAGE,
});
