import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import SearchIcon from '@mui/icons-material/Search';
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
      <div className='left'>
        <img className='logo' src='../../images/formlogo 2.png' alt=""/>
        <div className='item'>
          <Link to="/" style={{textDecoration:"none",color:"black"}}>
          <span>Home</span></Link>
        </div>
        <div className='item'>
        <Link to="/results" style={{textDecoration:"none",color:"black"}}>
          <span>Results</span></Link>
        </div>
        <div className='item'>
        <Link to="/FAQ" style={{textDecoration:"none",color:"black"}}>
          <span>FAQ</span></Link>
        </div>
        <div className='item'>
        <Link to="/about_us" style={{textDecoration:"none",color:"black"}}>
          <span>About Us</span></Link>
        </div>
        <div className='item'>
        <Link to="/contact_us" style={{textDecoration:"none",color:"black"}}>
          <span>Contact Us</span></Link>
        </div>
        <div className="item search">
          <form action="#">
          <CiSearch color='gray'/>
          <input type="text" name="search" placeholder='Search exams here'/>
          </form>
        </div>
        <div className='item'>
          <NotificationsActiveOutlinedIcon color='primary' fontSize='medium'/>
        </div>
        <div className='item'>
          <div className='profile' >
            <img src='../../images/profile_img.jpg' alt=''/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar