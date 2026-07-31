import { produce } from 'immer';

import { ADD_TASK, REMOVE_TASK } from './actions.js';

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return produce(state, (draftState) => {
        draftState.tasks.push(action.payload);
      });
    case REMOVE_TASK:
      return produce(state, (draftState) => {
        draftState.tasks = draftState.tasks.filter((task) => task.id !== action.payload);
      });
    default:
      return state;
  }
};
