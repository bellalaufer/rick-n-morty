import { mainTypes } from "./actionTypes";

    export const saveCorrectAC = (image) => ({
        type: mainTypes.SAVE_CORRECT,
        payload: image
    });
    
    export const saveIncorrectAC = (image) => ({
        type: mainTypes.SAVE_INCORRECT,
        payload: image
    });