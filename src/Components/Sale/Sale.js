import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsList } from '../../Request/Request'
import { store } from '../../Store'
import ProductList from '../ProductList/ProductList'
import s from './Sale.module.css'

function Sale() {
    const dispatch = useDispatch()
    useEffect(()=>dispatch(fetchProductsList()),[])
    const products = useSelector(store=>store.products)
    const discountProducts = products.filter(elem=>elem.discont_price!==null).slice(0,4)
  return (
    <div className={s.sale_sale}>
        <h2>Sale</h2>
        <ProductList products={discountProducts}/>
    </div>
  )
}

export default Sale