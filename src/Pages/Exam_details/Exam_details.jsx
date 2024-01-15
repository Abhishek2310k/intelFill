import React from 'react'
import './Exam_details.scss'
import { Link, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Small_card from '../../components/Small_card/Small_card'
import Detail_card from '../../components/Detail_card/Detail_card';
import Interesting_exams from '../../components/Interesting_exams/Interesting_exams';
import data_exams from '../../data_exams';

const Exam_details = () => {
  const params = useParams();
  const data = data_exams.find(data => data.id == params.id);
  return (
    <div className='exam_details'>
        <div className='go_back'>
            <Link to="/" className='link_back'><span><ArrowBackIcon style={{marginRight:20}}/>Back</span></Link>
        </div>
        <div className='content'>
            <div className='c1'>
            <Small_card data={data}/>
            <Detail_card/>
            </div>
            <div className='c2'>
            <Interesting_exams/>
            </div>
        </div>
        {/* <img src={data.logo_url} alt=''/> */}
    </div>
  )
}

export default Exam_details