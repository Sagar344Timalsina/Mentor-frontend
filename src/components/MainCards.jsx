import React from 'react'
import "../styles/CardPage.scss";
import img1 from "../assets/images/card1.png"
import img2 from "../assets/images/card2_1_1.png"
import img3 from "../assets/images/card2_1_2.png"
import img4 from "../assets/images/card2_2_1.png"
import img5 from "../assets/images/card3_1.png"
import img6 from "../assets/images/card3_2.png"

const MainCards = () => {
  return (
    <main className='cards'>
       <div className='cards__first'>
        <div className="cards__first__image">
        <img src={img1} alt="Image1"  />
        </div>
        <h5 className='card__text'>Graphics Design</h5>
        </div> 
       <div className='cards__second'>
            <div className="cards__second__upper">
                <div className="cards__second__upper--orange">
                  <div className="cards__second__upper--orange__img">
                    <img src={img2} alt="Image2" />
                  </div>
                  <h5 className='card__text'>UI/UX</h5>
                </div>
                <div className="cards__second__upper--pink">
                <div className="cards__second__upper--pink__img">
                  <img src={img3} alt="Image3" />
                </div>
                <h5 className='card__text'>Apps</h5>
                </div>
            </div>
            <div className="cards__second__lower">
            <div className="cards__second__lower__img">
                  <img src={img4} alt="Image4" />
                </div>
              
              <h5 className='card__text'>Illustrations</h5></div>
        </div> 
       <div className='cards__third'>
        <div className="cards__third--green">
          <div className="cards__third--green__img">
            <img src={img5} alt="Image5" />
          </div>
          
          <h5 className='card__text'>Photography</h5></div>
        <div className="cards__third--brown">
          
          <div className="cards__third--brown__img">
            <img src={img6} alt="Image6" />
          </div>
          <h5 className='card__text'>Motion Graphics</h5></div>
        </div> 
    </main>
  )
}

export default MainCards