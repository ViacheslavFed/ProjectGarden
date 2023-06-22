
const defaultState = {}
const GET_CATEGORIE_PRODUCTS = 'GET_CATEGORIE_PRODUCTS'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const SORT_BY_DEFAULT = 'SORT_BY_DEFAULT'
const SORT_BY_PRICE_DESC = 'SORT_BY_PRICE_DESC'
const SORT_BY_PRICE_ASC = 'SORT_BY_PRICE_ASC'
const SORT_BY_NAME_AZ = 'SORT_BY_NAME_AZ'
const SORT_BY_NAME_ZA = 'SORT_BY_NAME_ZA'
const FILTER_BY_RANGE = 'FILTER_BY_RANGE'

export const categorieProductsReducer = (state=defaultState,action)=>{
    switch(action.type){
        case GET_CATEGORIE_PRODUCTS:
            action.payload.data = [...action.payload.data.map(elem=>({...elem,showBySale:true,showByRange:true}))]
            return {...action.payload}
            case FILTER_BY_SALE:
      return {
        ...state,
        data: state.data.map(elem => {
          if (elem.discont_price === null) {
            elem.showBySale = !action.payload
          }
          return elem
        })
      }
    case SORT_BY_DEFAULT:
      return { ...state, data: state.data.sort((a, b) => a.id - b.id) }
    case SORT_BY_PRICE_DESC:
      return { ...state, data: state.data.sort((a, b) => (b.discont_price ? b.discont_price : b.price) - (a.discont_price ? a.discont_price : a.price)) }
    case SORT_BY_PRICE_ASC:
      return { ...state, data: state.data.sort((a, b) => a.price - b.price) }
    case SORT_BY_NAME_AZ:
      return { ...state, data: state.data.sort((a, b) => a.title.localeCompare(b.title)) }
      case SORT_BY_NAME_ZA:
        return { ...state, data: state.data.sort((a, b) => b.title.localeCompare(a.title)) }
      case FILTER_BY_RANGE:
      let { from, to } = action.payload;
      if (isNaN(to)) {
        to = Infinity;
      }
      if (isNaN(from)) {
        from = -Infinity;
      }
      return {
        ...state, data: state.data.map(elem => ({
          ...elem, showByRange:
            (elem.discont_price ? elem.discont_price : elem.price) >= from
            && (elem.discont_price ? elem.discont_price : elem.price) <= to
        })
        )
      }
            default:return state
    }
}

export const getCategorieProductsAction = (payload)=>({type:GET_CATEGORIE_PRODUCTS,payload})
export const filter_by_sale_action = (payload)=>({type:FILTER_BY_SALE,payload})
export const sort_category_by_default_action = ()=>({type:SORT_BY_DEFAULT})
export const sort_category_by_desc_action = ()=>({type:SORT_BY_PRICE_DESC})
export const sort_category_by_asc_action = ()=>({type:SORT_BY_PRICE_ASC})
export const sort_category_by_az_action = ()=>({type:SORT_BY_NAME_AZ})
export const sort_category_by_za_action = ()=>({type:SORT_BY_NAME_ZA})
export const filter_category_by_range_action = (payload)=>({type:FILTER_BY_RANGE,payload})