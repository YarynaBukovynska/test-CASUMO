import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducers from './reducers';

const middlewares = [];
let storeInit;
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const init = (root, sagas) => {
  storeInit = createStore(root, composeWithDevTools({})(
    applyMiddleware(...middlewares),
  ));
  sagaMiddleware.run(rootSaga);
};
init(combineReducers(reducers));

export const store = () => storeInit;
