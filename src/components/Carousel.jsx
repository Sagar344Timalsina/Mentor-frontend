import React from 'react'
import "../styles/Carousel.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import img1 from "../assets/images/Slider1.png"
import img2 from "../assets/images/Slider2.png"
import img3 from "../assets/images/Slider3.png"

const Carousel = () => {
    return (
        <main className='main-carousel'>
            <section className='main-carousel__text'>My Work</section>
            <section className='main-carousel__slider'>
                <div className="main__carousel__slider--purple">
                    <img src={img1} alt="Image1" />
                </div>
                <div className="main__carousel__slider--white">
                    <img src={img2} alt="Image2" />
                </div>
                <div className="main__carousel__slider--black">
                    <img src={img3} alt="Image3" />
                </div>
            </section>
            <section className='main-carousel__button'>
                <span className="main-carousel__button--left">
                    <AiOutlineArrowLeft className='button--left' size={32} />
                </span>
                <span className="main-carousel__button--right">
                    
                    <AiOutlineArrowRight className='button--right' size={32} />
                </span>
            </section>
        </main>
    )
}

export default Carousel