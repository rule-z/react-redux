import { useGetProjectTasksQuery } from '../services/tasks/api.js';
import { Task } from './task.jsx';

export const TasksList = () => {
  const { data: projectTasks } = useGetProjectTasksQuery();

  return (
    <ul>
      {projectTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
