import React from 'react'
import { useSelector } from 'react-redux'
import s from './CartCounter.module.css'

function CartCounter() {
    const cart = useSelector(store=>store.cart)
    const counter = cart.reduce((acum,elem)=>acum+elem.count,0)
  return (
    <div className={s.cart_counter}>
        {counter}
    </div>
  )
}

export default CartCounter