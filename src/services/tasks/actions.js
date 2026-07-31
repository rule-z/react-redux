import {
  addTask as addTaskApi,
  deleteTaskById,
  getProjectTasks,
} from '../../utils/todoist-api.js';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS';

export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';

export const loadAsyncTasks = () => (dispatch) => {
  getProjectTasks().then((res) => {
    dispatch({
      type: LOAD_TASKS_SUCCESS,
      payload: res,
    });
  });
};

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    content: text,
    id: Math.random().toString(),
  },
});

export const addAsyncTask = (text) => (dispatch) => {
  addTaskApi(text).then((res) => {
    dispatch({
      type: ADD_TASK_SUCCESS,
      payload: res,
    });
  });
};

export const deleteTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const deleteAsyncTask = (id) => (dispatch) => {
  deleteTaskById(id).then(() => {
    dispatch({
      type: REMOVE_TASK_SUCCESS,
      payload: id,
    });
  });
};

export const removeAsyncTask = (id) => (dispatch) => {
  deleteTaskById(id).then(() => {
    dispatch({
      type: REMOVE_TASK_SUCCESS,
      payload: id,
    });
  });
};
