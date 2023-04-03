import React from 'react'
import "../styles/ContactUs.scss";

const ContactUs = () => {
  return (
    <section className='contact'>
        <div className="contact__details">
            <h1>Book a call with me</h1>
            <p>I'd love to have a chat to chat to see how i can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
        </div>
            <button className="contact__button">Free Consultation</button>
        
    </section>
  )
}

export default ContactUs