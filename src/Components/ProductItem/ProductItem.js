import React from 'react'
import s from './ProductItem.module.css'
import {base_url} from '../../Request/Request'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add_to_cart_action } from '../../Store/Reducers/CartReducer'

function ProductItem({product}) {
    const {id,image,price,discont_price,title} = product
    const discont = Math.floor(100-discont_price*100/price)
    const dispatch = useDispatch()
    const addToCart = ()=>{
        dispatch(add_to_cart_action(product))
    }
  return (
    <div className={s.product_item}>
        <div className={s.product_img_add_cart}>
            <NavLink to={`/products/${id}`}>
                <img className={s.product_item_img} src={`${base_url}${image}`}/>
            </NavLink>
            <button className={s.add_to_cart} onClick={addToCart}>Add to cart</button>
        </div>
        <div className={s.product_item_price}>
            <p className={s.disc_pr}>{discont_price !==null ? discont_price : price} $</p>
                {discont_price && <p className={s.price}>{price}$</p>}
                {discont_price && <p className={s.discont}>{-discont}%</p>}
        </div>
            <p className={s.title}>{title}</p>
    </div>
  )
}

export default ProductItem