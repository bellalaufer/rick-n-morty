
import { mainTypes } from "../actions/actionTypes";

const initialState = [];

export function correctAnswersReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.SAVE_CORRECT:
        return [...state, action.payload];
    default:
        return state;
    }
}


