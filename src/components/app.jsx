import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadTasks } from '../services/tasks/actions.js';
import {
  getTasks,
  getTasksError,
  getTasksLoading,
} from '../services/tasks/selectors.js';
import { NewTaskForm } from './new-task-form.jsx';
import { TasksList } from './tasks-list.jsx';

export const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const loading = useSelector(getTasksLoading);
  const error = useSelector(getTasksError);

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  if (error) {
    return <h2>{`Ошибка: ${error}`}</h2>;
  }

  return (
    <>
      {tasks.length > 0 ? (
        <main>
          <NewTaskForm />
          <TasksList />
        </main>
      ) : (
        <p>Нет задач</p>
      )}
    </>
  );
};
