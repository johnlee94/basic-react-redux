import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(initialState={comments: []}) {
  return createStore(
    rootReducer,
      applyMiddleware(thunk)
  );
}
