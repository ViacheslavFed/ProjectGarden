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
    const showFilter = true
    const location = 'sale'
    return (
    <div className="container">
        <h2 className={s.all_salle_h2}>Products with sale</h2>
        <ProductList products={discountProducts} showFilter={showFilter} location={location}/>
    </div>
  )
}

export default AllSalesPage