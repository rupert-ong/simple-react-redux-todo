import { createStore } from 'redux';
import todoApp from './reducers';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions';

const store = createStore(todoApp);

console.log('Initial state:');
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
console.log('Add Todo Items:');
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about stores'));
console.log('Toggle Todo Items:');
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
console.log('Change visibilityFilter:');
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();