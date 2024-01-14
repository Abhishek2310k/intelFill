import React from 'react'
import Gallery from '../../components/Image_gallery/Gallery'
import Recommended_exam from '../../components/Recommended_exams/Recommended_exam'
import Recent_exams from '../../components/Recent_exams/Recent_exams'
import './Home.scss'
const Home = () => {

  const slides = [
    {
      src: "../../../images/Group 52.png",
      alt: "Image 1 for carousel",
    },
    {
      src: "../../../images/gallery2.png",
      alt: "Image 2 for carousel",
    },
    {
      src: "../../../images/gallery3.png",
      alt: "Image 3 for carousel",
    },
  ];

  return (
    <div className='home'>
      <Gallery data={slides}/>
      <Recommended_exam/>
      <Recent_exams/>
    </div>
  )
}

export default Home