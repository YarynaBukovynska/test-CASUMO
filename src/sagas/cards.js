import uniqueId from 'lodash/uniqueId';
import { put, call, takeLeading } from 'redux-saga/effects';
import {
  LOAD_CARDS,
  SAVE_CARD,
  SET_CARD,
  UPDATE_CARD,
  INIT_YOUR_CARDS_PAGE,
} from '../action-types/cards';
import { errorHandlerSaga } from './utils';
import { CARD_TYPES } from '../constants/cards';
import { fetchCards } from '../api/cards';

export function* saveCardSaga({ data }) {
  const type = data.id ? data.type : uniqueId() % 2 ? CARD_TYPES.MASTERCARD : CARD_TYPES.VISA;
  const card = {
    ...data,
    id: data.id || uniqueId(),
    type,
  };
  try {
    if(data.id) {
      yield put({ type: UPDATE_CARD, data: card });
    } else {
      yield put({ type: SET_CARD, data: card });
    }
  } catch (err) {
    yield errorHandlerSaga(err);
  }
}

export function* initYourCardsPageSaga() {
  try {
    const cards = yield call(fetchCards);
    yield put({ type: LOAD_CARDS, data: cards })
  } catch (err) {
    yield errorHandlerSaga(err);
  }
}

export function* cardsSagas() {
  yield takeLeading(SAVE_CARD, saveCardSaga);
  yield takeLeading(INIT_YOUR_CARDS_PAGE, initYourCardsPageSaga);
}
