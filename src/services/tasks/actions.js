export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    content: text,
    id: Math.random().toString(),
  },
});

export const deleteTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
