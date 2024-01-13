import React from 'react'
import Gallery from '../../components/Image_gallery/Gallery'
import Recommended_exam from '../../components/Recommended_exams/Recommended_exam'
const Home = () => {
  return (
    <div className='home'>
      <Gallery/>
      <Recommended_exam/>
    </div>
  )
}

export default Home