import { categoriesReducer } from "./Reducers/CategoriesReducer";
import { productsReducer } from "./Reducers/ProductsReducer";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { categorieProductsReducer } from "./Reducers/CategorieProductsReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer, 
    products: productsReducer,
    categorieProducts: categorieProductsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))