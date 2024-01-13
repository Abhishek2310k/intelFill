import React from 'react'
import './Detail_card.scss'
import { Link } from 'react-router-dom'
const Detail_card = () => {
  return (
    <div className='detail_card'>
        <h1>Exam Description:</h1>
        <ul>
            <li><span>JEE Main is a highly competitive entrance examination in India  engineering programs at prestigious institutions like the Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), and other centrally funded technical institutions.</span></li>
            <li><span>conducted by the National Testing Agency (NTA). It serves as the gateway for admission into various undergraduate</span></li>
            <li><span>JEE Main is conducted twice a year, typically in January and April. The examination is primarily computer-based</span></li>
        </ul>
        <h1>Eligibility:</h1>
        <ul>
            <li><span>candidates must have passed their 10+2 examination or equivalent with Physics, Mathematics, and Chemistry as compulsory subjects</span></li>
            <li><span>There are also specific age and attempt limit criteria that candidates need to fulfill</span></li>
            <li><span>Candidates need to register online on the official JEE Main website and fill in the application form. The application process includes uploading relevant documents, paying</span></li>
            <li><span>the application fee, and selecting the preferred exam centers. The detailed information bulletin provided by NTA guides candidates through the application process</span></li>
            <li><span>After successful registration, candidates receive their admit cards with details of the examination center, date, and time.</span></li>
        </ul>
        <h1>Important Details:</h1>
        <ul>
            <li><spna>JEE Main follows a scoring system where each correct answer is awarded positive marks, and incorrect answers result in negative marking. The raw scores are normalized to calculate the NTA scores, ensuring fairness in evaluation across different sessions and difficulty levels.</spna></li>
            <li><span>The NTA scores are used to determine the All India Rank (AIR) of candidates. The AIR plays a crucial role in the subsequent admission process, especially for top engineering institutes. Various state governments and private engineering colleges also consider JEE Main scores for admission into their undergraduate engineering programs</span></li>
        </ul>
        <hr style={{width:"100%",color:"gray"}}/>
        <div className='low'>
            <div className='logos'>
                <img id='fb' src='../../images/Facebook_logo.png' alt=""/>
                <img id='tw' src='../../images/Twitter_logo.png' alt=""/>
                <img id='linked' src='../../images/Linkedin_logo.png' alt=""/>
            </div>
            <div>
                <Link to="/repost_job" className='link'>Report this Job</Link>
            </div>
        </div>
    </div>
  )
}

export default Detail_card