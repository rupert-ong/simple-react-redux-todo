import { VisibilityFilters } from '../actions';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../actionTypes';

// Reducer composition (visibilityFilter)
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// Reducer composition (todos)
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

// Main Reducer
const todoApp = (state = {}, action) => {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
};