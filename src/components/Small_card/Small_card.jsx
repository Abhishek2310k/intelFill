import './Small_card.scss'
import React, { useState } from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';

const Small_card = ({data}) => {

    const [bookmarked,setBookmarked] = useState(0);

  const handleBookmark = () => {
    setBookmarked(bookmarked === 0 ? 1 : 0);
  }

  function Item({bookmarked}) {
    if (bookmarked == 0) {
      return <BookmarkBorderOutlinedIcon color='primary'/>;
    }
    return <BookmarkIcon color='primary'/>;
  }

  return (
    <div className='small_card'>
        <div className='top'>
        <div className='logo_and_title'>
            <img src={data.logo_url} alt=''/>
            <div className='title'>
                <h1>{data.main_title}</h1>
                <h3>{data.second_title}</h3>
            </div>
        </div>
        <div className='bookmark_and_share'>
            <div className='bookmark' onClick={handleBookmark}>
                <Item bookmarked={bookmarked}/>
            </div>
            <div className='share'>
                <ShareIcon/>
            </div>
        </div>
        </div>

        <div className='mid'>
            <div className='date'>
                <CalendarMonthIcon color='primary'/>
                <span>
                    Exam Date: {data.exam_date}
                </span>
            </div>
            <div className='participants'>
                <GroupsIcon color='primary'/>
                <span>
                    Applicants: 20Lakh+
                </span>
            </div>
        </div>
        <hr style={{color:'gray',width:"100%"}}/>
        <div className='low'>
            <span>Posted some days ago</span><Link to="/nowhere">
            <button>Apply now</button></Link>
        </div>
    </div>
  )
}

export default Small_card