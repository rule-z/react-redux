export const todoistApiConfig = {
  baseUrl: 'https://api.todoist.com/api/v1',
  headers: {
    Authorization: 'Bearer ab1b9de87eac77475e757da34da41b848b96d443',
    'Content-Type': 'application/json',
  },
};

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

export const getProjectTasks = () => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks?project_id=6P8wWr9Xpx8X67w7`, {
    headers: todoistApiConfig.headers,
  })
    .then(getResponse)
    .then((res) => res.results);
};

export const addTask = (taskText) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks`, {
    method: 'POST',
    headers: todoistApiConfig.headers,
    body: JSON.stringify({
      content: taskText,
      project_id: '6P8wWr9Xpx8X67w7',
    }),
  }).then(getResponse);
};

export const deleteTaskById = (taskId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: todoistApiConfig.headers,
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  });
};
