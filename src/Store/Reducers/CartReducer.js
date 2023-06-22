
const defaultState = []
const ADD_TO_CART = 'ADD_TO_CART'
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'
const CLEAR_CART = 'CLEAR_CART'

const checkProduct = (state, payload) => {
    const productExist = state.find(el => el.id === payload.id);
    if (productExist) {
      productExist.count++
      return [...state]
    } else {
      return [...state, { ...payload, count: 1 }]
    }
  }

export const cartReducer = (state=defaultState,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            const tempState = checkProduct(state,action.payload)
            return tempState
        case INCREMENT_COUNT:
            state.find(elem=>elem.id===action.payload).count++
            return[...state]
        case DECREMENT_COUNT:
               const item = state.find(elem=>elem.id===action.payload)
               if (item.count>1){
                    item.count--
               } else{
                state=state.filter(elem=>elem.id !== action.payload)
               }
            return[...state]
        case CLEAR_CART:
               return []
            default:
                return state
    }
}

export const add_to_cart_action = (payload)=>({type:ADD_TO_CART,payload})
export const increment_count_action = (payload)=>({type:INCREMENT_COUNT,payload})
export const decrement_count_action = (payload)=>({type:DECREMENT_COUNT,payload})
export const clear_cart_action = ()=>({type:CLEAR_CART})