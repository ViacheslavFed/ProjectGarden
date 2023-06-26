import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../../Request/Request'
import s from './ProductInfoPage.module.css'
import { add_to_cart_action } from '../../Store/Reducers/CartReducer'
import { useDispatch } from 'react-redux'

function ProductInfoPage({products}) {
const {id}= useParams()
const [product,setProduct] = useState([])

useEffect(()=>{
    fetch(`${base_url}/products/${id}`)
    .then(res=>res.json())
    .then(data=>setProduct(data[0]))
},[])
const price = product.price
const discont_price = product.discont_price
const discont = Math.floor(100-discont_price*100/price)
const dispatch = useDispatch()
const addToCart = ()=>{
    dispatch(add_to_cart_action(product))
}
  return (
    <div className="container">
    <div className={s.product_info_page}>
        <h2>{product.title}</h2>
        <div className={s.product_info_page_flex}>
            <div className={s.product_info_page_flex_left}>
                <img src={`${base_url}${product.image}`}/>
            </div>
            <div className={s.product_info_page_flex_right}>
                <div className={s.product_item_price}>
                    <p className={s.disc_pr}>{discont_price !==null ? discont_price : price} $</p>
                    {discont_price && <p className={s.price}>{price}$</p>}
                    {discont_price && <p className={s.discont}>{-discont}%</p>}
                </div>
                <button onClick={addToCart}>To cart</button>
                <h2>Description</h2>
                <p className={s.description}>{product.description}</p>
            </div>
        </div>
    </div>
    </div>

  )
}

export default ProductInfoPage