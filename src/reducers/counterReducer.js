import * as ACTION_TYPES from '../actionTypes/counter';

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
	
		case ACTION_TYPES.INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		default:
			return state;
	}
}

export default counterReducer;
