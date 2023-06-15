import React from 'react'
import s from './ProductItem.module.css'
import {base_url} from '../../Request/Request'

function ProductItem({product}) {
    const {id,image,price,discont_price,title} = product
    const discont = Math.floor(100-discont_price*100/price)
  return (
    <div className={s.product_item}>
        <img className={s.product_item_img} src={`${base_url}${image}`}/>
        <div className={s.product_item_price}>
            <p className={s.disc_pr}>{discont_price} $</p>
            <p className={s.price}>{price} $</p>
            <p className={s.discont}>- {discont} %</p>
        </div>
        <p className={s.title}>{title}</p>
    </div>
  )
}

export default ProductItem