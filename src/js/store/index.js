import { createStore, applyMiddleware, combineReducers } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import chatReducer from '../reducers/chats';

export default function configureStore() {
  const middlewares = [ThunkMiddleware];

  const store = createStore(
    combineReducers({
      chats: chatReducer,
    }),
    applyMiddleware(...middlewares)
  );

  return store;
}
