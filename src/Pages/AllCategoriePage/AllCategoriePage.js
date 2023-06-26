import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesList from '../../Components/CategoriesList/CategoriesList'
import { fetchCategoriesList } from '../../Request/Request'
import s from './AllCategoriePage.module.css'

function AllCategoriePage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategoriesList())
    },[])
    const categories = useSelector(store=>store.categories)
  return (
    <div className={s.all_category}>
        <CategoriesList categories={categories}/>
    </div>
  )
}

export default AllCategoriePage