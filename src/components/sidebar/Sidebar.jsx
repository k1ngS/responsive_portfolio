import React from 'react'
import "./sidebar.css"
import Logo from '../../assets/logo.svg'

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='navLoge'>
        <img src={Logo} alt="Logo" />
      </a>

      <nav className="nav">
        <div className="navMenu">
          <ul className="navList">
            <li className="navItem">
              <a href="#home" className="navLink">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="navItem">
              <a href="#about" className="navLink">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="navItem">
              <a href="#services" className="navLink">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="navItem">
              <a href="#resume" className="navLink">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="navItem">
              <a href="#portfolio" className="navLink">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="navItem">
              <a href="#blog" className="navLink">
                <i className="icon-note"></i>
              </a>
            </li>

            <li className="navItem">
              <a href="#contact" className="navLink">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="navFooter">
        <span className="copyright">
          marcos_k1ngs&copy;2022 - 2023
        </span>
      </div>
    </aside>
  )
}

export default Sidebar