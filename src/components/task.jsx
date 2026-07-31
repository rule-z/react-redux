import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Task = ({ task }) => {
  // eslint-disable-next-line
  const handleDelete = () => {};

  return (
    <article>
      <span>{task.content}</span>
      <FontAwesomeIcon icon={faTrash} onClick={handleDelete} inverse />
    </article>
  );
};
