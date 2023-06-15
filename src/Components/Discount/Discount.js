import React from 'react'
import s from './Discount.module.css'
import gnome from './assets/gnome.png'

function Discount() {
  return (
    <div className={s.discount}>
        <div className={s.discount_img}>
            <img src={gnome}/>
        </div>
        <div className={s.discount_form}>
            <form>
                <h2>5% off </h2>
                <h4>on the first order</h4>
                <input type='tel' placeholder='+49' name='tel'></input>
                <button>Get a discount</button>
            </form>
        </div>
    </div>
  )
}

export default Discount