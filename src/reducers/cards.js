import { partialStateReducer } from '../utils';
import {
  LOAD_CARDS,
  SET_CARD,
  UPDATE_CARD,
  SET_CURRENT_CARD,
  CLEAR_CURRENT_CARD,
  SET_SHOW_WORKFLOW,
} from '../action-types/cards';
import { generateDataForUpdateCards } from '../utils';

const initialState = {
  cards: [],
  currentCard: {},
  showWorkflow: false,
};

const handlers = {
  [LOAD_CARDS]: (state, action) => ({
    cards: action.data,
  }),
  [SET_CARD]: (state, action) => ({
    cards: [
      ...state.cards,
      action.data,
    ],
  }),
  [UPDATE_CARD]: (state, action) => ({
    cards: generateDataForUpdateCards(state.cards, action.data),
  }),
  [SET_CURRENT_CARD]: (state, action) => ({
    currentCard: action.data,
  }),
  [CLEAR_CURRENT_CARD]: () => ({
    currentCard: initialState.currentCard,
  }),
  [SET_SHOW_WORKFLOW]: (state, action) => ({
    showWorkflow: action.data,
  }),
};

export default partialStateReducer(initialState, handlers);
