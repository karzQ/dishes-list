import { ingredients } from '../config/data';
import { GET_INGREDIENTS, ADD_INGREDIENT, REMOVE_INGREDIENT } from '../redux/actions';

const initialState = {
    ingredients: [
        
    ]
};

const storedIngredientsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_INGREDIENT: {
            const obj = { id: state.ingredients.length, ...payload };
            return {...state, ingredients: [ {...obj} , ...state.ingredients] };
        }

        case REMOVE_INGREDIENT: {
            return state.filter(item => item.id !== payload);
        }

        case GET_INGREDIENTS: {
            return state.ingredients;
        }

        default: {
            return state;
        }
    }
}

export default storedIngredientsReducer;