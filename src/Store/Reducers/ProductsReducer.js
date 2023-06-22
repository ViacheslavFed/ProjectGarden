
const defaultState=[]
const GET_PRODUCTS = 'GET_PRODUCTS'
const FILTER_PRODUCTS_BY_SALE = 'FILTER_PRODUCTS_BY_SALE'
const SORT_PRODUCTS_BY_DEFAULT = 'SORT_PRODUCTS_BY_DEFAULT'
const SORT_PRODUCTS_BY_PRICE_DESC = 'SORT_PRODUCTS_BY_PRICE_DESC'
const SORT_PRODUCTS_BY_PRICE_ASC = 'SORT_PRODUCTS_BY_PRICE_ASC'
const SORT_PRODUCTS_BY_NAME_AZ = 'SORT_PRODUCTS_BY_NAME_AZ'
const SORT_PRODUCTS_BY_NAME_ZA = 'SORT_PRODUCTS_BY_NAME_ZA'
const FILTER_PRODUCTS_BY_RANGE = 'FILTER_PRODUCTS_BY_RANGE'

export const productsReducer = (state = defaultState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return action.payload.map(elem=>({...elem,showBySale: true, showByRange: true}))
        case FILTER_PRODUCTS_BY_SALE:
            if(action.payload){
                return state.map(elem=>{
                    if(elem.discont_price===null){
                        elem.showBySale = false
                    }
                    return elem
                })
            }else{
                return state.map(elem=>({...elem,showBySale:true}))
            }
            case SORT_PRODUCTS_BY_DEFAULT:
      return [...state].sort((a, b) => a.id - b.id)
    case SORT_PRODUCTS_BY_PRICE_DESC:
      return [...state].sort((a, b) => {
        const a_price = a.discont_price ? a.discont_price : a.price;
        const b_price = b.discont_price ? b.discont_price : b.price;
        return b_price - a_price
      })
    case SORT_PRODUCTS_BY_PRICE_ASC:
      return [...state].sort((a, b) => {
        const a_price = a.discont_price ? a.discont_price : a.price;
        const b_price = b.discont_price ? b.discont_price : b.price;
        return a_price - b_price
      })
    case SORT_PRODUCTS_BY_NAME_AZ:
      return [...state].sort((a, b) => a.title.localeCompare(b.title))
      case SORT_PRODUCTS_BY_NAME_ZA:
        return [...state].sort((a, b) => b.title.localeCompare(a.title))
    case FILTER_PRODUCTS_BY_RANGE:
      console.log(action.payload);
      let { from, to } = action.payload;
      if (isNaN(to)) {
        to = Infinity;
      }
      if (isNaN(from)) {
        from = -Infinity;
      }
      return [...state].map(product => ({
        ...product, showByRange:
          (product.discont_price ? product.discont_price : product.price) >= from
          && (product.discont_price ? product.discont_price : product.price) <= to
      }))
            default:
                return state
    }
}

export const getProductsAction = (payload)=>({type:GET_PRODUCTS,payload})
export const filter_products_by_sale_action = (payload)=>({type:FILTER_PRODUCTS_BY_SALE,payload})
export const sort_by_default_action = ()=>({type:SORT_PRODUCTS_BY_DEFAULT})
export const sort_by_price_desc_action = ()=>({type:SORT_PRODUCTS_BY_PRICE_DESC})
export const sort_by_price_asc_action = ()=>({type:SORT_PRODUCTS_BY_PRICE_ASC})
export const sort_by_name_az_action = ()=>({type:SORT_PRODUCTS_BY_NAME_AZ})
export const sort_by_name_za_action = ()=>({type:SORT_PRODUCTS_BY_NAME_ZA})
export const filter_by_range_action = (payload)=>({type:FILTER_PRODUCTS_BY_RANGE,payload})