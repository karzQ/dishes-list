import { GET_CART, ADD_DISH_TO_CART, REMOVE_DISH_FROM_CART, GET_DISHES_COUNT } from '../redux/actions';
import { idGenerator } from '../utils/commons';

const initialState = {
    cart: []
};

const shoppingCartReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_DISH_TO_CART: {

            console.log("cart before : ", state.cart);
            console.log({payload});

            const objIsFound = state.cart.find(item => item.name === payload.name);
            console.log({objIsFound});

            if (objIsFound === undefined) {
                const obj = { id: idGenerator(), quantity: 1, ...payload };
                console.log({obj});

                return {...state, cart: [ {...obj} , ...state.cart] };

            } else if (objIsFound !== undefined) {

                const dish = state.cart.find(item => item.name === payload.name);
                const obj = { id: payload.id, quantity: dish.quantity + 1, ...payload };

                const dishIndex = state.cart.indexOf(dish);
                // state.cart[dishIndex].quantity += 1;
                const newArr = state.cart.filter(item => item.id !== obj.id);

                console.log({dish});
                console.log({dishIndex});

                console.log("cart after : ", state.cart);
                // return {... state};
                return {...state, cart: [ {...obj} , ...newArr] };
            }
        }

        case GET_DISHES_COUNT: {
            const count = 0;
            state.cart.forEach(item => {
                count += item.quantity;
            })

            return count;
        }

        case REMOVE_DISH_FROM_CART: {
            return state.filter(item => item.id !== payload);
        }

        case GET_CART: {
            return state.cart;
        }
        default:
            return state;
    }
}

export default shoppingCartReducer;