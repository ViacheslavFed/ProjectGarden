import React from 'react'
import CartItem from '../CartItem/CartItem'
import s from './CartList.module.css'

function CartList({cart}) {
  return (
    <div>
        {cart.map(elem=><CartItem key={elem.id} {...elem}/>)}
    </div>
  )
}

export default CartList