import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addTask as addTaskApi,
  deleteTaskById,
  getProjectTasks,
} from '../../utils/todoist-api.js';

export const loadTasks = createAsyncThunk('tasks/loadTasks', async () => {
  return getProjectTasks();
});

export const addTask = createAsyncThunk('tasks/addTask', async (text) => {
  return addTaskApi(text);
});

export const removeTask = createAsyncThunk('tasks/removeTask', async (id) => {
  await deleteTaskById(id);
  return id;
});

export const logAddTask = createAsyncThunk(
  'tasks/logAddTask',
  async (text, { dispatch }) => {
    console.log('logAddTask', text);
    dispatch(addTask(text));
  }
);
