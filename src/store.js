import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const getDevTools = () => {
  return window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;
}

const initialState = {};

const middleware = [
  thunk,
];

const store = createStore(reducer, initialState, compose(
  applyMiddleware(...middleware),
  getDevTools()
));

export default store;
