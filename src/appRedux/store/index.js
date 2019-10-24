import { applyMiddleware, compose, createStore } from "redux";
// import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import reducers from "../reducers/index";
import rootSaga from '../sagas/index';
import createSagaMiddleware from "redux-saga";
// const rootReducer = require('../reducers/index');
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState,
    applyMiddleware(...middlewares));

  sagaMiddleware.run(rootSaga);

  return { store };
}

