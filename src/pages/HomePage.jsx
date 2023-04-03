import React from 'react'
import CommonHeaderFooter from '../components/CommonHeaderFooter'
import MainCards from '../components/MainCards'
import PersonalDetails from '../components/PersonalDetails'
import "../styles/HomePage.scss"
import Carousel from '../components/Carousel'
import ContactUs from '../components/ContactUs'

const HomePage = () => {
  return (
    <div className='home'>
       <header className='home__header'>
        <CommonHeaderFooter/>
        <article className='home__header__text'>
            <h1 className='home__header__text--heading'>Design solutions made easy</h1>
            <span className='home__header__text--subheading'>With over ten years of experience in various design disciplines. I'm your one-stop shop for your design needs.</span>
        </article>
       </header>
       <main className='main'>
        <section className='main__card'><MainCards/></section>
        <section className='main__details'>
          <PersonalDetails/>
        </section>
        <section className='main__carousel'>
          <Carousel/>
        </section>
        <section className='main__contacts'>
          <ContactUs/>
        </section>
       </main>
        <footer className='main__footer'>
          <CommonHeaderFooter/>
        </footer>
    </div>
  )
}

export default HomePage