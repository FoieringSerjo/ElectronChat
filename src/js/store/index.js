import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';

export default function configureStore() {
  const middlewares = [ThunkMiddleware];

  const store = createStore(() => {
    return {
      message: 'HELLO',
      data1: 'SOME DATA TEST',
      data2: 'SOME DATA TEST2',
    };
  }, applyMiddleware(...middlewares));

  return store;
}
