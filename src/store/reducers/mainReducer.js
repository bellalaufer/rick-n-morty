import { mainTypes } from '../actions/actionTypes';

const initialState = {
    list: [],
    pictures: [],    
    image: '',
};

export function mainReducer(state = initialState, action) {
switch (action.type) {
        case mainTypes.ADD_IMAGE: {
            return { ...state, list: [...state.list, action.payload] };
        }
        case mainTypes.ADD_PICTURE: {
            return { ...state, pictures: [...state.pictures, action.payload] };
        }
        case mainTypes.DELETE_TODO: {
            break;
        }
        default: {
            return state;
        }
    }
}
