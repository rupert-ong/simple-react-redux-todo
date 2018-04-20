import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actionTypes';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addToDo = text => (
  {
    type: ADD_TODO,
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