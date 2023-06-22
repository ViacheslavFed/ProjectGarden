import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartList from '../../Components/CartList/CartList'
import CartOrder from '../../Components/CartOrder/CartOrder'
import s from './CartPage.module.css'

function CartPage() {
    const cart = useSelector(store=>store.cart)
    const total = cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0)
  return (
    <div className={s.cart_page}>
        <h2>Shopping cart</h2>

        <div>

        <div className={s.cart_page_flex}>
            <div className={s.cart_list}>
                <div className={s.cart_link}>
                    <NavLink to='/products/all'>
                        Back to the store
                    </NavLink>
                </div>
                <CartList cart={cart}/>
            </div>
            <div className={s.cart_order}>
                <CartOrder total={total}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartPage