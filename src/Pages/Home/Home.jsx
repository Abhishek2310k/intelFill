import React from 'react'
import Gallery from '../../components/Image_gallery/Gallery'
import Exam_card from '../../components/Exam_card/Exam_card'
const Home = () => {
  return (
    <div className='home'>
      <Gallery/>
      <Exam_card/>
    </div>
  )
}

export default Home