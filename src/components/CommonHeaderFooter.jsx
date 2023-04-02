import React from 'react'
import "../styles/CommonHeaderFooter.scss"

const CommonHeaderFooter = () => {
  return (
    <header className='header'>
        <div className='header__box'>
            <div className="header__box--circle"></div>
        </div>
        <button className="header__button">Free Consultation</button>
    </header>
  )
}

export default CommonHeaderFooter