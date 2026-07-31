import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ADD_TASK } from '../services/tasks/actions.js';

export const NewTaskForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TASK,
      payload: {
        content: inputValue,
        id: Math.random().toString(),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите текст задачи"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};
