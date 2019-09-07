import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import words from './words';

// Combine all our reducers together
const rootReducer = combineReducers({ words, routing: routerReducer });

export default rootReducer;
