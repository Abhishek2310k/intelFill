import './Small_card.scss'
import React, { useState } from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';

const Small_card = () => {

    const [bookmarked,setBookmarked] = useState(0);

  const handleBookmark = () => {
    setBookmarked(bookmarked === 0 ? 1 : 0);
    console.log(bookmarked);
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
            <img src='../../images/NTA_logo.png' alt=''/>
            <div className='title'>
                <h1>JEE Mains</h1>
                <h3>National Test Agency</h3>
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
                    Exam Date: 23 March 2023
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
            <span>Posted some days ago</span>
            <button>Apply now</button>
        </div>
    </div>
  )
}

export default Small_card