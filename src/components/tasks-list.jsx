import { Task } from './task.jsx';

export const TasksList = () => {
  const projectTasks = [
    {
      content: 'Задача 1',
      id: '1',
    },
    {
      content: 'Задача 2',
      id: '2',
    },
    {
      content: 'Задача 3',
      id: '3',
    },
  ];

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
