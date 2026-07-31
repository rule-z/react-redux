export const customMiddleware = (n) => {
  return (store) => {
    return (next) => (action) => {
      console.log(`middleware with ${n}`);

      if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
      }

      return next(action);
    };
  };
};
