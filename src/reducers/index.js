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
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      }
    default:
      return state;
  }
  return state;
};