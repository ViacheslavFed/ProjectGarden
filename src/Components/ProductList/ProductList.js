import React from 'react'
import Filter from '../Filter/Filter'
import ProductItem from '../ProductItem/ProductItem'
import s from './ProductList.module.css'

function ProductList({products, location, showFilter}) {
    products = products.filter((product) => product.showBySale && product.showByRange)
  return (
    <div className='container'>
        {showFilter && <Filter location={location}/>}
        <div className={s.product_list}>
            {products.map(elem=><ProductItem product={elem} key={elem.id}/>)}
        </div>
    </div>

  )
}

export default ProductList