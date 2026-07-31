import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import { tasksReducer } from './tasks/reducer.js';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export const store = configureStore();
