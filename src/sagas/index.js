import { all, spawn } from 'redux-saga/effects';
import { cardsSagas } from './cards';

export default function* rootSaga() {
  yield all([
    yield spawn(cardsSagas)
  ])
}
