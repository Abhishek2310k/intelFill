import React from 'react'
import './Recommended_exam.scss'
import Exam_card from '../../components/Exam_card/Exam_card'
import { Link } from 'react-router-dom'
import data_exams from '../../data_exams.js'
const Recommended_exam = () => {
  return (
    <div className='recommended_exams'>
        <div className='top'>
            <h3>Recommended Exams</h3>
            <Link to="#" style={{textDecoration:'none'}}><h3>See all</h3></Link>
        </div>
            <div className="final">
            <div className="container">
            {data_exams.map(data => (
              <Exam_card 
              price={data.cost} 
              url={data.logo_url} 
              main_title={data.main_title}
              sub_title={data.second_title}
              people={data.participants}
              tags={data.tags}
              />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Recommended_exam