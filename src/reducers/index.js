import { combineReducers } from 'redux'

import messageReducer from './messageReducer';
import counterReducer from './counterReducer';

const reducer = combineReducers({
    counter: counterReducer,
    message: messageReducer,
});

export default reducer;
