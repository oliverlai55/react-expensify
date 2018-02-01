import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  // setting default state count:0
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

// calls every single time state changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Action - an object that gets sent to the store
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// call once to unsubscribe
// unsubscribe();

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});
