import { SET_MESSAGE, CLEAR_MESSAGE } from '../actionTypes/message'
import { fetchMessage } from '../utils/fetchMessage';

const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message,
});

export const clearMessage = () => ({
    type: CLEAR_MESSAGE,
});

export const requestMessage = () => 
    async (dispatch, getState) => {
        const state = getState();
        const message = await fetchMessage(state.counter.count);

        return dispatch(setMessage(message));
    }
