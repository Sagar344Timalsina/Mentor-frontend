import React from 'react'
import Anne from "../assets/images/Anne.jpg"
import "../styles/PersonalDetails.scss"

const PersonalDetails = () => {
  return (
    <div className='details'>
        <section className='details__image'>
            <img  src={Anne} alt='details'/>
        </section>
        <section className='details__intro'>
            <h4 className="details__intro__text">
                I'm Amy, and I'd love to work on your next project
            </h4>
            <p className="details__intro__subtext"> 
                I love working with others to create beautiful design solutions.
                I've designed everything from brand illustrations to complete mobile apps.I am also handy with a camera!
            </p>
            <button className='details__intro__button'>Free Consultation</button>
        </section>
    </div>
  )
}

export default PersonalDetails