import React from 'react'
import grass from './assets/grass.png'
import s from './Baner.module.css'

function Baner() {
  return (
    <div className={s.baner_menu}>
        <div className={s.baner_left}>
            <h2 className={s.h2_sale}>Sale</h2>
            <h3 className={s.h3_season}>New season</h3>
            <button className={s.button_sale}>Sale</button>
        </div>
        <div className={s.baner_right}>
            <img src={grass}/>
        </div>
    </div>
  )
}

export default Baner