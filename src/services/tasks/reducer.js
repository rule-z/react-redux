const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tasks/loadTasks/fulfilled':
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case 'tasks/loadTasks/pending':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'tasks/loadTasks/rejected':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'tasks/addTask/fulfilled':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'tasks/removeTask/fulfilled':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
