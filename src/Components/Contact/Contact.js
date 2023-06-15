import React from 'react'
import s from './Contact.module.css'
import { SlSocialInstagram } from 'react-icons/sl'
import { BsWhatsapp } from 'react-icons/bs'

function Contact() {
  return (
    <div className={s.contact_address}>
        <div className={s.contact}>
            <h3>Contact</h3>
            <p>+49 999 999 99 99</p>
            <div className={s.contact_icons}>
                <div className={s.icon_instagram}>
                    <SlSocialInstagram className={s.icon}/>instagram
                </div>
                <div className={s.icon_whatsapp}>
                    <BsWhatsapp className={s.icon}/>WhatsApp
                </div>
            </div>
        </div>
        <div className={s.address}>
            <h3>Address</h3>
            <p className={s.address_p1}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
            <p className={s.address_p2}>Working Hours:</p>
            <p className={s.address_p3}>24 hours a day</p>
        </div>
    </div>
  )
}

export default Contact