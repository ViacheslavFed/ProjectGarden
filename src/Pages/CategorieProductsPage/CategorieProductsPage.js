import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductList from '../../Components/ProductList/ProductList'
import { fetchCategorieProducts } from '../../Request/Request'
import s from './CategorieProductsPage.module.css'

function CategorieProductsPage() {
    const{id}=useParams()
    const dispatch = useDispatch()
    useEffect(()=>dispatch(fetchCategorieProducts(id)),[])
    const categorieProducts = useSelector(store=>store.categorieProducts)
    const title = categorieProducts.data ? categorieProducts.category.title : ''
    const data = categorieProducts.data ? categorieProducts.data : []
  return (
    <div>
        <h2>{title}</h2>
        <ProductList products={data}/>
    </div>
  )
}

export default CategorieProductsPage