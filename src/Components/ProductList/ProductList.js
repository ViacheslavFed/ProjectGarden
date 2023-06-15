import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import s from './ProductList.module.css'

function ProductList({products}) {
  return (
    <div className={s.product_list}>
        {products.map(elem=><ProductItem product={elem} key={elem.id}/>)}
    </div>
  )
}

export default ProductList