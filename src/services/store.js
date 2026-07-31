import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';

import { tasksReducer } from './tasks/reducers.js';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
