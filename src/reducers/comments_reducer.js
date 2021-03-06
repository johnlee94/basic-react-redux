import { ADD_COMMENT } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
    return [ action.payload, ...state];
  }
  return state;
}
