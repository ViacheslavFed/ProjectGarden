import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filter_by_sale_action, filter_category_by_range_action, sort_category_by_asc_action, sort_category_by_az_action, sort_category_by_default_action, sort_category_by_desc_action, sort_category_by_za_action } from '../../Store/Reducers/CategorieProductsReducer';
import { filter_by_range_action, filter_products_by_sale_action, sort_by_default_action, sort_by_name_az_action, sort_by_name_za_action, sort_by_price_asc_action, sort_by_price_desc_action } from '../../Store/Reducers/ProductsReducer'
import s from './Filter.module.css'

function Filter({location}) {
    const [fromValue, setFromValue] = useState('from');
    const [toValue, setToValue] = useState('to');
    const handleChange = (e)=>{
        const range = {
            from: fromValue,
            to: toValue
          }
          const { value } = e.target;
          if (e.target.name === 'from') {
            range.from = value
            setFromValue(Number(value))
          } else {
            range.to = value
            setToValue(Number(value))
          }
          dispatch(location === 'category_products' ? filter_category_by_range_action(range) : filter_by_range_action(range))
    }
    const handel_sort = (e)=>{
        e.preventDefault();
    switch (e.target.value) {
      case 'default':
        dispatch(location === 'category_products' ? sort_category_by_default_action() : sort_by_default_action())
        break;
      case 'priceDesc':
        dispatch(location === 'category_products' ? sort_category_by_desc_action() : sort_by_price_desc_action())
        break
      case 'priceAsc':
        dispatch(location === 'category_products' ? sort_category_by_asc_action() : sort_by_price_asc_action())
        break
      case 'namea-z':
        dispatch(location === 'category_products' ? sort_category_by_az_action() : sort_by_name_az_action())
        break      
        case 'namez-a':
        dispatch(location === 'category_products' ? sort_category_by_za_action() : sort_by_name_za_action())
        break
      default:
        break;
    }
    }
    const dispatch = useDispatch()
    const discount_hendler = (e)=>{
        dispatch(location==='category_products' ? filter_by_sale_action(e.target.checked):filter_products_by_sale_action(e.target.checked))
    }
  return (
    <div className="container">
        <div className={s.all_product_input}>
            <div className={s.input_pris}>
                <p>Price</p>
                <input type='number' placeholder='from' name='from' min='0' value={fromValue} onChange={handleChange}></input>
                <input type='number' placeholder='to' name='to' min='0' value={toValue} onChange={handleChange}></input>
            </div>
            {location !== 'sale' && <div className={s. input_discount}>
                <p>Discounted items</p>
                <input onClick={discount_hendler} type='checkbox'></input>
            </div>}
            <div className={s.input_sorted}>
                <p>Sorted</p>
                <select onChange={handel_sort} type='number'>
                    <option value='default'>by default</option>
                    <option value='priceDesc'>price descending</option>
                    <option value='priceAsc'>price ascending</option>
                    <option value='namea-z'>by name A-Z</option>
                    <option value='namez-a'>by name Z-A</option>
                </select>
            </div>
         </div>
         <div className={s.all_product_input_media}>
            <div className={s.all_product_input_media_flex}>
            <div className={s.input_pris}>
                <p>Price</p>
                <input type='number' placeholder='from' name='from' min='0' value={fromValue} onChange={handleChange}></input>
                <input type='number' placeholder='to' name='to' min='0' value={toValue} onChange={handleChange}></input>
            </div>
            {location !== 'sale' && <div className={s. input_discount}>
                <p>Discounted items</p>
                <input onClick={discount_hendler} type='checkbox'></input>
            </div>}
            </div>
            <div className={s.input_sorted}>
                <p>Sorted</p>
                <select onChange={handel_sort} type='number'>
                    <option value='default'>by default</option>
                    <option value='priceDesc'>price descending</option>
                    <option value='priceAsc'>price ascending</option>
                    <option value='namea-z'>by name A-Z</option>
                    <option value='namez-a'>by name Z-A</option>
                </select>
            </div>
         </div>
    </div>
  )
}

export default Filter