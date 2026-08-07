import { useSelector } from 'react-redux';

import { getTasks } from '../services/tasks/tasksSlice.js';
import { Task } from './task.jsx';

export const TasksList = () => {
  const projectTasks = useSelector(getTasks);

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
