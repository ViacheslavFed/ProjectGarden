import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../../Components/ProductList/ProductList'
import { fetchProductsList } from '../../Request/Request'
import s from './AllProductsPage.module.css'

function AllProductsPage() {
    const dispatch = useDispatch()
    const location = 'products_page'
    useEffect(()=>dispatch(fetchProductsList()),[])
    const products = useSelector(store=>store.products)
  return (
    <div>
         <h2 className={s.all_product_h2}>All products</h2>
        <ProductList products={products} showFilter={true} location={location}/>
    </div>
  )
}

export default AllProductsPage