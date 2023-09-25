import React from 'react'
import "./Section.scss"

const Header = ({ onLogout }) => {
  return (
    <section className="header w-100 d-flex align-items-center">
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-between flex-wrap"
        >
          <div className="navbar-title">
            <h3 className="title-first-name mb-0">Vinayak</h3>
            <h3 className="title-last-name mb-0">Pawar</h3>
            {/* <img className="logoImage" src="assets/SVGIcons/logo.svg" /> */}
          </div>
          <div>
            <button className="glow-on-hover" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header