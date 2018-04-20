import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actionTypes';

let nextTodoIndex = 0;

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addToDo = text => (
  {
    type: ADD_TODO,
    id: nextTodoIndex++,
    text
  }
);

export const toggleTodo = id => (
  {
    type: TOGGLE_TODO,
    id
  }
);

export const setVisibilityFilter = filter => (
  {
    type: SET_VISIBILITY_FILTER,
    filter
  }
);