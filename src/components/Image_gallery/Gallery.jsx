import React from 'react'
import './Gallery.scss'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Gallery = ({data}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="carousel">
      {/* <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" /> */}
      <div className='arrow arrow-left' onClick={prevSlide} style={{backgroundColor:"gray",width:"25px",height:"50px",paddingTop:"20px"}}><ArrowBackIcon color='transparent'/></div>
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <div className='arrow arrow-right' onClick={nextSlide} style={{backgroundColor:"gray",width:"25px",height:"50px",paddingTop:"20px"}}><ArrowForwardIcon color='black'/></div>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  )
}

export default Gallery