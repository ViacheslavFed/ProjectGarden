import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../../Components/ProductList/ProductList'
import { fetchProductsList } from '../../Request/Request'
import s from './AllProductsPage.module.css'

function AllProductsPage() {
    const dispatch = useDispatch()
    useEffect(()=>dispatch(fetchProductsList()),[])
    const products = useSelector(store=>store.products)
  return (
    <div>
         <h2>All products</h2>
        <ProductList products={products}/>
    </div>
  )
}

export default AllProductsPage