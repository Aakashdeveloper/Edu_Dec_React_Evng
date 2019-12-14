import { createStore, applyMiddleware } from 'redux';
import promisMiddleware from 'redux-promise';

import reducers from '../reducers';

let store = createStore(reducers,applyMiddleware(promisMiddleware))

export default store;