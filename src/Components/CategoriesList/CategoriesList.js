import React from 'react'
import { NavLink } from 'react-router-dom'
import {base_url} from '../../Request/Request'
import s from './CategoriesList.module.css'

function CategoriesList({categories}) {
  return (
    <div className='container'>
    <div className={s.categories}>
        {categories.map(elem=>
        <NavLink to={`/categories/${elem.id}`}key={elem.id}>
            <div>
                <img className={s.img_list} src={`${base_url}${elem.image}`}/>
                <h4 className={s.h4_title}>{elem.title}</h4>
            </div>
        </NavLink>

            )}
    </div>
    </div>

  )
}

export default CategoriesList