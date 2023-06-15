import { getCategorieProductsAction } from "../Store/Reducers/CategorieProductsReducer";
import { getCategoriesAction } from "../Store/Reducers/CategoriesReducer";
import { getProductsAction } from "../Store/Reducers/ProductsReducer";

export const base_url = "http://localhost:3333";

export const fetchCategoriesList = ()=>{
    return function(dispatch){
        fetch(`${base_url}/categories/all`)
        .then(res=>res.json())
        .then(data=>dispatch(getCategoriesAction(data)))
    }
}

export const fetchProductsList = ()=>{
    return function(dispatch){
        fetch(`${base_url}/products/all`)
        .then(res=>res.json())
        .then(data=>dispatch(getProductsAction(data)))
    }
}

export const fetchCategorieProducts = (id)=>{
    return function(dispatch){
        fetch(`${base_url}/categories/${id}`)
        .then(res=>res.json())
        .then(data=>dispatch(getCategorieProductsAction(data)))
    }
}