import { applyMiddleware, createStore } from "redux";
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import reducers from "../reducers/index";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})
export { history };
