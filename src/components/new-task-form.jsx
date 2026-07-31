import { useState } from 'react';

export const NewTaskForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
