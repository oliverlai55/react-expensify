import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  // setting default state count:0
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: state.count
      };
    default:
      return state;
  }

  // if (action.type === 'INCREMENT') {
  //   return {
  //     count: state.count + 1
  //   };
  // } else {
  //   return state;
  // }
  console.log('running');
  return state;
});


console.log(store.getState());
// get current state

// Action - an object that gets sent to the store
// increment, decrement, reset
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

// RESET - set the count equal to 0
store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

console.log(store.getState());
