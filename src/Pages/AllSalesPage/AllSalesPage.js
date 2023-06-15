import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../../Components/ProductList/ProductList'
import { fetchProductsList } from '../../Request/Request'
import s from './AllSalesPage.module.css'

function AllSalesPage() {
    const dispatch = useDispatch()
    useEffect(()=>dispatch(fetchProductsList()),[])
    const products = useSelector(store=>store.products)
    const discountProducts = products.filter(elem=>elem.discont_price!==null)
  return (
    <div>
        <h2>Products with sale</h2>
        <ProductList products={discountProducts}/>
    </div>
  )
}

export default AllSalesPage