import { createStore } from 'redux';

// Action generators - functions
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	// Destrucutre incrementBy from payload, setting default value as 1 if there is no number
	// initial state is empty object {} i think?
	type: 'INCREMENT',
	incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy,
});

const setCount = ({ setBy = 1 } = {}) => ({
	type: 'SET',
	setBy,
});

const resetCount = () => ({
	type: 'RESET',
});

const store = createStore((state = { count: 0 }, action) => {
	// setting default state count:0
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy,
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy,
			};
		case 'SET':
			return {
				count: action.setBy,
			};
		case 'RESET':
			return {
				count: 0,
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
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
// call once to unsubscribe
// unsubscribe();
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(resetCount());
store.dispatch(setCount({ setBy: 100 }));
