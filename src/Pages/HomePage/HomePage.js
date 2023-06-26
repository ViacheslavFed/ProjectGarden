import React, { useEffect } from 'react'
import Baner from '../../Components/Baner/Baner'
import s from './HomePage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesList } from '../../Request/Request';
import CategoriesList from '../../Components/CategoriesList/CategoriesList';
import Discount from '../../Components/Discount/Discount';
import Sale from '../../Components/Sale/Sale';
import { NavLink } from 'react-router-dom';


function HomePage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategoriesList())
    },[])
    const categories = useSelector(store=>store.categories).slice(0,4)
  return (
    <div className="container">
        <Baner/>
        <div className={s.catalog}>
            <h2>Catalog</h2>
            <NavLink to={'/catalog'}><button className={s.button_categories}>All categories </button></NavLink>
        </div>
        <CategoriesList categories={categories}/>
        <Discount/>
        <Sale/>
    </div>
  )
}

export default HomePage