import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
      <div className='left'>
        <img className='logo' src='../../images/formlogo 2.png' alt=""/>
        <div className='item'>
          <span>Home</span>
        </div>
        <div className='item'>
          <span>Results</span>
        </div>
        <div className='item'>
          <span>FAQ</span>
        </div>
        <div className='item'>
          <span>About Us</span>
        </div>
        <div className='item'>
          <span>Contact Us</span>
        </div>
        <div className="item search">
          <form action="#">
          <CiSearch color='gray'/>
          <input type="text" name="search" placeholder='Search exams here'/>
          </form>
        </div>
        <div className='item'>
          <NotificationsActiveOutlinedIcon color='primary'/>
        </div>
        <div className='item'>
          <div className='profile'>
            <img src='../../images/profile_img.jpg' alt=''/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar