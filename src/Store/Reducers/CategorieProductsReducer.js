
const defaultState = {}
const GET_CATEGORIE_PRODUCTS = 'GET_CATEGORIE_PRODUCTS'

export const categorieProductsReducer = (state=defaultState,action)=>{
    switch(action.type){
        case GET_CATEGORIE_PRODUCTS:
            return action.payload
            default:return state
    }
}

export const getCategorieProductsAction = (payload)=>({type:GET_CATEGORIE_PRODUCTS,payload})