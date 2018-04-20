import { VisibilityFilters } from '../actions';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../actionTypes';

const initialState = {
  visibilityFilters: VisibilityFilters.SHOW_ALL,
  todos: []
};

// Reducer composition, separate todo actions from set filter
// Takes in state.todos array
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilters: action.filter
      };
    case ADD_TODO:
      return {
        ...state,
        todos: todos(state.todos, action)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: todos(state.todos, action)
      };
    default:
      return state;
  }
  return state;
};