import React from 'react'
import Gallery from '../../components/Image_gallery/Gallery'
import Recommended_exam from '../../components/Recommended_exams/Recommended_exam'
import Recent_exams from '../../components/Recent_exams/Recent_exams'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Gallery/>
      <Recommended_exam/>
      <Recent_exams/>
    </div>
  )
}

export default Home