import { createStore, combineReducers } from 'redux';
import dishesReducer from '../reducers/dishesReducer';
import ingredientsReducer from '../reducers/ingredientsReducer';
import shoppingCartReducer from '../reducers/shoppingCartReducer';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer, persistStore} from 'redux-persist';

const dishesPersistConfig = {
    key: 'dishes',
    storage: AsyncStorage
}

const ingredientsPersistConfig = {
    key: 'ingredients',
    storage: AsyncStorage
}

const shoppingCartPersistConfig = {
    key: 'cart',
    storage: AsyncStorage
}

const persistedDishes = persistReducer(dishesPersistConfig, dishesReducer);
const persistedIngredients = persistReducer(ingredientsPersistConfig, ingredientsReducer);
const persistedShoppingCart = persistReducer(shoppingCartPersistConfig, shoppingCartReducer);

const rootReducer = combineReducers({
    dishesStore: persistedDishes,
    ingedientsStore: persistedIngredients,
    shoppingCartStore: persistedShoppingCart
});

export const store = createStore(rootReducer, {});
export const persistor = persistStore(store);