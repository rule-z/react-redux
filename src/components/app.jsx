import { NewTaskForm } from './new-task-form.jsx';
import { TasksList } from './tasks-list.jsx';

export const App = () => {
  return (
    <main>
      <NewTaskForm />
      <TasksList />
    </main>
  );
};
