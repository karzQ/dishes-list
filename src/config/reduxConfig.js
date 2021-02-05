import { createStore, combineReducers } from 'redux';
import dishesReducer from '../reducers/dishesReducer';
import ingredientsReducer from '../reducers/ingredientsReducer';
import shoppingCartReducer from '../reducers/shoppingCartReducer';
import categoriesReducer from '../reducers/categoriesReducer';
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
const categoriesPersistConfig = {
    key: 'categories',
    storage: AsyncStorage
}

const persistedDishes = persistReducer(dishesPersistConfig, dishesReducer);
const persistedIngredients = persistReducer(ingredientsPersistConfig, ingredientsReducer);
const persistedShoppingCart = persistReducer(shoppingCartPersistConfig, shoppingCartReducer);
const persistedCategories = persistReducer(categoriesPersistConfig, categoriesReducer);

const rootReducer = combineReducers({
    dishesStore: persistedDishes,
    ingredientsStore: persistedIngredients,
    shoppingCartStore: persistedShoppingCart,
    categoriesStore: persistedCategories,
});

export const store = createStore(rootReducer, {});
export const persistor = persistStore(store);