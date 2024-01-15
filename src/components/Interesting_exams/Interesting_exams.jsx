import React from 'react'
import './Interesting_exams.scss'
import data_exams from '../../data_exams'
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Interesting_exams = () => {
    const firstFourExams = data_exams.slice(0, 4);
    let freq = 0;
  return (
    <div className='interesting_exams'>
        <h2>Exams you might be interested in</h2>
        <div className='four_cards'>
        {firstFourExams.map(data=>(
        <div className='card'>
            <div className='top'>
                <img src={data.logo_url} alt=''/>
                <div className='title'>
                    <h3 className='main_title'>{data.main_title}</h3>
                    <h3 className='sub_title'>{data.second_title}</h3>
                </div>
            </div>
            <div className='mid'>
                <GroupsIcon fontSize='large'/>
                <span>More than {data.participants}</span>
            </div>
            <div className='bottom'>
                <div className='left'>
                <AccountBalanceWalletIcon fontSize='large'/>
                <span>{data.cost}</span>
                </div>
                <Link className="link" to={data.to} style={{textDecoration:'none',fontSize:'large'}}>
                    <span>View Details</span><ArrowForwardIcon/>
                </Link>
            </div>
            <hr style={{color:'gray', width:'95%'}}/>
        </div>))}
        </div>
        <Link to="/page_not_found">
        <button> View All </button></Link>
    </div>
  )
}

export default Interesting_exams