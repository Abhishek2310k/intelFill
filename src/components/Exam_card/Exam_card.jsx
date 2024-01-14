import React, { useState } from 'react'
import './Exam_card.scss'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Groups2Icon from '@mui/icons-material/Groups2';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const Exam_card = (props) => {
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
    <div className='exam_card'>
    <div className='top'>
        <div className='logo'>
            <img src={props.url} alt='brand logo'/>
        </div>
        <div className='title'>
            <h1>{props.main_title}</h1>
            <h3>{props.sub_title}</h3>
        </div>
        <div className='bookmark' onClick={handleBookmark}>
            <Item bookmarked={bookmarked}/>
        </div>
    </div>
    <hr style={{width: "95%"}}/>
    <div className='middle'>
        <div className='r1'>
            <div className='c1'><Groups2Icon fontSize='medium'/></div>
            <div className='c2'>More than {props.people}</div>
        </div>
        <div className='r2'>
            <div className='c1'><AccountBalanceWalletIcon fontSize='medium'/></div>
            <div className='c2'>{props.price}</div>
        </div>
        <div className='r3 row_buttons'>
            {props.tags.map(tag => (
              <button>{tag}</button>
            ))}
        </div>
        <div className='r4'>
            <Link to="#" style={{textDecoration:'none',color:"#0066CC"}}>
            <span>View Details <ArrowForwardIosIcon fontSize='x-small' color='primary'/></span>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Exam_card