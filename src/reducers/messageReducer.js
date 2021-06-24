import * as ACTION_TYPES from '../actionTypes/message';

const initialState = {
    message: '',
    firstVeryImportantField: 0,
    secondVeryImportantField: false,
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        case ACTION_TYPES.CLEAR_MESSAGE: 
            return {
                ...state,
                message: '',
            };
        default:
            return state;
    }
}

export default messageReducer;
