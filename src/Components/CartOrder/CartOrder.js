import React from 'react'
import { useDispatch } from 'react-redux'
import { clear_cart_action } from '../../Store/Reducers/CartReducer'
import s from './CartOrder.module.css'

function CartOrder({total}) {
  const dispatch = useDispatch()
  const submit = (e)=>{
    e.preventDefault()
    dispatch(clear_cart_action())
    e.target.reset()
  }
  return (
    <div className={s.cart_order_border}>
      <div className={s.cart_order}>
          <h2>Order details</h2>
          <div className={s.cart_order_flex}>
            <p>Total</p>
            <p>{total} $</p>
          </div>
          <form onSubmit={submit} className={s.cart_order_input_button}>
             <input type='tel' placeholder='Phone number' name='tel' required pattern={'[+]{1}[0-9]{11}'}></input>
             <button>Order</button>
         </form>
    </div>
    </div>

  )
}

export default CartOrder