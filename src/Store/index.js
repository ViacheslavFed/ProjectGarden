import { categoriesReducer } from "./Reducers/CategoriesReducer";
import { productsReducer } from "./Reducers/ProductsReducer";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { categorieProductsReducer } from "./Reducers/CategorieProductsReducer";
import {cartReducer} from "./Reducers/CartReducer"

const rootReducer = combineReducers({
    categories: categoriesReducer, 
    products: productsReducer,
    categorieProducts: categorieProductsReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))