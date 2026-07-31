import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch } from 'react-redux';

import { REMOVE_TASK } from '../services/tasks/actions.js';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
 
  const handleDelete = () => {
    dispatch({
      type: REMOVE_TASK,
      payload: task.id,
    });
  }

  return (
    <article>
      <span>{task.content}</span>
      <FontAwesomeIcon icon={faTrash} onClick={handleDelete} inverse />
    </article>
  );
};
