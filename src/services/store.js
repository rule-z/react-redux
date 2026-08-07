// import { composeWithDevTools } from '@redux-devtools/extension';
// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk';

// import { tasksReducer } from './tasks/tasksSlice.js';

// const rootReducer = combineReducers({
//   tasks: tasksReducer,
// });

// export const configureStore = (initialState) => {
//   return createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
// };

// export const store = configureStore();

import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { tasksSlice } from './tasks/tasksSlice.js';

const rootReducer = combineSlices(tasksSlice);

export const store =  configureStore({
  reducer: rootReducer,
});
