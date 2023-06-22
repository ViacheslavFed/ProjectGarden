import React from 'react'
import { base_url } from '../../Request/Request'
import { decrement_count_action, increment_count_action } from '../../Store/Reducers/CartReducer'
import s from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'

function CartItem({id, title, image, price, discont_price, count}) {
   const dispatch = useDispatch()
    return (
        <div className={s.cart_item_strip}>
                    <div className={s.up_strip}></div>
            <div className={s.cart_item}>
                        <img src={`${base_url}${image}`}/>
                <div className={s.title_button_flex}>
                            <p className={s.title_button_flex_title}>{title}</p>
                    <div className={s.border}>
                        <div className={s.on_click_flex}>
                            <button onClick={()=>dispatch(decrement_count_action(id))}>-</button>
                            <p>{count}</p>
                            <button onClick={()=>dispatch(increment_count_action(id))}>+</button>
                        </div>
                    </div>
                </div>
                    <div className={s.discont_price_flex}>
                        <p className={s.discont_price_flex_discount}>{discont_price ? discont_price : price}$</p>
                        {discont_price && <p className={s.discont_price_flex_price}>{price}$</p>}
                    </div>
                        <div className={s.cart_item_x}><AiOutlineClose/></div>
            </div>
                    <div className={s.bottom_strip}></div>
        </div>

  )
}

export default CartItem