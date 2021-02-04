import { dishes } from '../config/data';
import { GET_DISHES, ADD_DISH, REMOVE_DISH } from '../redux/actions';

const initialState = {
    dishes: [...dishes]
} ;

/* console.log({initialState})
console.log({dishes}) */

const dishesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_DISH: {
            const obj = { id: `${payload.id}-${state.clipboard.length}`, ...payload }
            return [{...obj, ...state}];        
        }

        case REMOVE_DISH: {
            return state.filter(item => item.id !== payload);
        }

        case GET_DISHES: {
            console.log({state});
            return state;
        }
        default:
            return state;
    }
}

export default dishesReducer;