import { ingredients } from '../config/data';
import { GET_INGREDIENTS, ADD_INGREDIENTS, REMOVE_INGREDIENTS } from '../redux/actions';

const initialState = {
    ingredients: [...ingredients]
};

const ingredientsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "add_ingredient": {
            const obj = { id: `${payload.id}-${state.clipboard.length}`, ...payload }
            return [{...obj, ...state}];        
        }

        case "remove_ingredient": {
            return state.filter(item => item.id !== payload);
        }

        default: {
            return state;
        }
    }
}

export default ingredientsReducer;