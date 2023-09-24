import React from 'react'
import "./Section.scss"

function Header() {
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
            <ul className="navbar-menu mb-0">
              <li><a className="active" href="\">&lt; Service &gt;</a></li>
              <li><a className="" href="\">Works</a></li>
              <li><a className="" href="\">Notes</a></li>
              <li><a className="" href="\">Contacts</a></li>
            </ul>
          </div>
          <div>
            <ul className="social-media mb-0">
              <li>
                <i className="fa-brands fa-linkedin-in"></i>
                <a href="\" target="_blank">LinkedIn</a>
              </li>
              <li>
                <i className="fa-brands fa-github"></i>
                <a href="\" target="_blank">Github</a>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <a href="mailto:pawar0101vinayak@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header