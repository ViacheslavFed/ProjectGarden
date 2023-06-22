import React from 'react'
import s from './Header.module.css'
import logo from './assets/logo.png'
import { SlHandbag } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import CartCounter from '../CartCounter/CartCounter'

function Header() {
  return (
    <div className={s.header_menu}>
        <div className={s.logo}>
            <img src={logo}/>
            <NavLink to={'/catalog'}><button className={s.catalog}>Catalog</button></NavLink>
        </div>
        <ul className={s.nav_menu}>
            <NavLink to='/'><li className={s.menu_item}>Main Page</li></NavLink>
            <NavLink to='/products/all'><li className={s.menu_item}>All products</li></NavLink>
            <NavLink to='/sales/all'><li className={s.menu_item}>All sales</li></NavLink>
        </ul>
        <div className={s.cart}>
            <NavLink to='/cart'>
                <SlHandbag className={s.icon_cart}/>
            </NavLink>
            <CartCounter className={s.cart_counter}/>
        </div>
    </div>
  )
}

export default Header