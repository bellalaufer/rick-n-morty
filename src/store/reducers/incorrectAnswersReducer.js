import { mainTypes } from "../actions/actionTypes";

const initialState = [];

export function incorrectAnswersReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.SAVE_INCORRECT:
            return [...state, action.payload];
    default:
        return state;
    }
}
