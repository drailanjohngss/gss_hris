import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../Reducers';

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk, logger))
);

export default store;
