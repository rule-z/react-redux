import { combineSlices, configureStore as createStore } from '@reduxjs/toolkit';

import { tasksApi } from './tasks/api.js';

const rootReducer = combineSlices(tasksApi);

export const configureStore = (initialState) => {
  return createStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(tasksApi.middleware);
    },
  });
};

export const store = configureStore();
