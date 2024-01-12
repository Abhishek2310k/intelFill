import React from 'react'
import './Gallery.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Gallery = () => {

  const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    // delete activeSlide.dataset.active
  })
})

  return (
    <div className='gallery'>
      <section aria-label="Newest Photos">
    <div className="carousel" data-carousel>
      <button className="carousel-button prev" data-carousel-button="prev"><ArrowBackIosIcon/></button>
      <button className="carousel-button next" data-carousel-button="next"><ArrowForwardIosIcon/></button>
      <ul data-slides>
        <li className="slide" data-active>
          <img src="https://imgs.search.brave.com/nCDl3we37MKn83QOIVsEwnolCIPHbKtFCUUCut2yU5E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/Njk0NzQ5NjgwMjgt/NTY2MjNmMDJlNDJl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/SmxZWFYwYVdaMWJD/VXlNR3hoYm1Selky/RndaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="Nature Image #1"/>
        </li>
        <li className="slide">
          <img src="https://imgs.search.brave.com/ql_Ch1_f-LMcfYJFtzMDkKLvtEmXqWN8SzsSOCeH_X4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9va3NsaWtlZmls/bS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDIvQWxl/eC1KYW1lcy5qcGc" alt="Nature Image #2"/>
        </li>
        <li className="slide">
          <img src="https://source.unsplash.com/ndN00KmbJ1c" alt="Nature Image #3"/>
        </li>
      </ul>
    </div>
  </section>
    </div>
  )
}

export default Gallery