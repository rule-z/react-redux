import {
  ADD_TASK_SUCCESS,
  LOAD_TASKS_SUCCESS,
  REMOVE_TASK_SUCCESS,
  TASKS_ERROR,
  TASKS_LOADING,
} from './actions.js';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case TASKS_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case TASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
