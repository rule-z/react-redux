import { createSlice, nanoid, createSelector } from '@reduxjs/toolkit';

import { addTask, loadTasks, removeTask } from './actions.js';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const isRejectedAction = (action) => action.type.endsWith('rejected');

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTaskContent: {
      reducer: (state, action) => {
        const task = state.tasks.find((task) => task.id === action.payload.id);
        if (task) {
          task.content = (task.content + action.key).toUpperCase();
        }
      },
      prepare: (id) => {
        return { payload: { id, key: nanoid() } };
      },
    },
  },
  selectors: {
    getTasks: (state) => state.tasks,
    getTasksError: (state) => state.error,
    getTasksLoading: (state) => state.loading,
    getTestTasks: createSelector(
      (state) => tasksSlice.getSelectors().getTasks(state),
      (tasks) => tasks.filter((task) => task.content.includes('тест'))
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(loadTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.error = action.error?.message ?? 'Unknown error';
        state.loading = false;
      });
  },
});

export const { updateTaskContent } = tasksSlice.actions;

export const { getTasks, getTasksError, getTasksLoading, getTestTasks } =
  tasksSlice.selectors;
