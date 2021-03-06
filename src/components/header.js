import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/header.css"
import logo from "../images/logo.svg"

const Header = () => {
  const [show, setShow] = useState(false)
  const onClick = () => {
    setShow(!show)
  }

  {
    /*useEffect(() => {
    show && (document.body.style.overflow = "hidden")
    !show && (document.body.style.overflow = "unset")
  }, [show])*/
  }
  return (
    <div>
      <header className="headers">
        <div className="container nav_container">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            onClick={onClick}
          />
          <label htmlFor="menu-btn" className="menu-icon" id="menu">
            <input style={{ display: "none" }} />
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/what-we-do">What we do</Link>
            </li>
            <li>
              <Link to="/how-we-do-it">How we do it</Link>
            </li>

            <li>
              <Link to="/blog">Insights</Link>
            </li>

            <li>
              <Link
                to="https://www.adviserlogic.com/Default.aspx"
                target="_blank"
              >
                Login
              </Link>
            </li>
            <Link to="#contact">
              <button>Contact Us</button>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
