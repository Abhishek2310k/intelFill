import React from 'react'
import { Link } from 'react-router-dom'
import './Page_not_found.scss'
const page_not_found = () => {
  return (
    <div className='page_not_found'>
  <h1>404 Error Page</h1>
  <p className="zoom-area">
    Page not yet been created{" "}
  </p>
  <p className="zoom-area">
    Please Hire me so that I could complete it{" "}
  </p>
  <section className="error-container">
    <span>4</span>
    <span>
      <span className="screen-reader-text">0</span>
    </span>
    <span>4</span>
  </section>
  <div className="link-container">
    <a
      target="_blank"
      href="/"
      className="more-link"
    >
      Home
    </a>
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1Ei1oC28rBvwhZaNCj65_bO69SMCZt7an/view?usp=sharing"
      className="more-link"
    >
      Look At Resume
    </a>
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1Ei1oC28rBvwhZaNCj65_bO69SMCZt7an/view?usp=sharing"
      className="more-link"
    >
      Dont't want to Hire
    </a>
  </div>
</div>

  )
}

export default page_not_found