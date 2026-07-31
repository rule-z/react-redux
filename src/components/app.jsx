import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadAsyncTasks } from '../services/tasks/actions.js';
import { NewTaskForm } from './new-task-form.jsx';
import { TasksList } from './tasks-list.jsx';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAsyncTasks());
  }, []);

  return (
    <main>
      <NewTaskForm />
      <TasksList />
    </main>
  );
};
