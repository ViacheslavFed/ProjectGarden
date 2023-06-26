import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Modale.module.css'

function Modale({active,setActive}) {
  return (
    <div className={active ? s.modale_menu_active : s.modale_menu}>
        <ul className={s.menu_list}>
            <li>
                <NavLink to='/' onClick={()=>setActive(!active)}>Main Page</NavLink>
            </li>
            <li>
                <NavLink to='/products/all' onClick={()=>setActive(!active)}>All products</NavLink>
            </li>
            <li>
                <NavLink to='/sales/all' onClick={()=>setActive(!active)}>All sales</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Modale