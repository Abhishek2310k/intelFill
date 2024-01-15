import React from 'react'
import './Recent_exams.scss'
import Exam_card from '../../components/Exam_card/Exam_card'
import { Link } from 'react-router-dom'
import data_exams from '../../data_exams.js'
const Recent_exams = () => {

    const tags = ["GATE","AP EAPCET","BITSAT","JEE Mains","JEE Advanced","TS EAMCET","TS EAMCET","Amity JEE","DU Admission","GATE","AP EAPCET","BITSAT","JEE Mains","JEE Advanced","TS EAMCET","TS EAMCET","Amity JEE","DU Admission"]
  return (
        <div className='recent_exams'>
        <div className='top'>
            <h3>Recent Exams</h3>
            <Link to="#" style={{textDecoration:'none'}}><h3>See all</h3></Link>
        </div>
        <div className='buttons' style={{marginBottom:20}}>
        <div className="final">
            <div className="container">
            <button id='all_tag'>All</button>
            {tags.map(tag=>(
                <button>{tag}</button>
            ))}
            </div>
        </div>
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
              id={data.id}
              to={data.to}
              />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Recent_exams