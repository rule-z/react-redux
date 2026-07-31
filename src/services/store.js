import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';

import { tasksReducer } from './tasks/reducer.js';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
