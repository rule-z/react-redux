import { useGetProjectTasksQuery } from '../services/tasks/api.js';
import { NewTaskForm } from './new-task-form.jsx';
import { TasksList } from './tasks-list.jsx';

export const App = () => {
  const { isLoading: loading, error, data: tasks } = useGetProjectTasksQuery();

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  if (!loading && error) {
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
