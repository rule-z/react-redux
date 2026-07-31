import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { deleteAsyncTask } from '../services/tasks/actions.js';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAsyncTask(task.id));
  };

  return (
    <article>
      <span>{task.content}</span>
      <FontAwesomeIcon icon={faTrash} onClick={handleDelete} inverse />
    </article>
  );
};
