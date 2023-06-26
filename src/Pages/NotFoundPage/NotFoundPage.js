import React from 'react'
import image from './assets/404.jpg'
import s from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div className="container">
        <img src={image}/>
    </div>
  )
}

export default NotFoundPage