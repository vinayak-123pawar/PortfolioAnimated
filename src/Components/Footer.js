import React, { useRef } from 'react'
import "./Section.scss"
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9vymx01', 'template_spruvoa', form.current, 'cRXj8kKzFzELrE6GA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section
      className="footer d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="footer-left col-sm-6">
            <div className="footer-email-intro">
              <p className="mt-0">Address : </p>
              <h6>
                Sangli, India,
                Pin-416419
              </h6>
              <h3>pawar0101vinayak@gmail.com</h3>
            </div>
            {/* <div className="footer-nav-menu">
              <ul className="footer-menu ps-0">
                <li className="ps-0"><a href="/">Service</a></li>
                <li className="ps-0"><a href="/">Works</a></li>
                <li className="ps-0"><a href="/">Notes</a></li>
                <li className="ps-0"><a href="/">Contacts</a></li>
              </ul>
            </div> */}
            <div>
              <ul className="social-media mb-0">
                <li>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <a href="https://www.linkedin.com/in/vinayak-pawar-673b9720b" target="_blank">LinkedIn</a>
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
          <div className="col-sm-6">
            <h2 className="mb-4 amazingTitle">Let's make something amazing together</h2>

            <form className="email-form" ref={form} onSubmit={sendEmail}>
              <h2 className="mb-4">Start by <span>saying hi</span></h2>
              <input
                className="mb-3 w-100"
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
              <input
                className="mb-3 w-100"
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <input
                className="mb-3 w-100"
                type="number"
                name="user_phone"
                placeholder="Your Phone number"
                required
              />
              <textarea className='TextAreaWrapper w-100 mb-4' name="message" cols={30} rows={3} placeholder='message' required></textarea>
              <div className="d-flex justify-content-center align-items-center">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center justify-content-between py-4 flex-wrap">
            <div className="footer-title text-white d-flex align-items-center">
              Designed Or Built By :
              <a className="ms-1 d-flex align-items-center" href="https://www.linkedin.com/in/vinayak-pawar-673b9720b" target="_blank">
                <h3 className="title-first-name mb-0">Vinayak</h3>
                <h3 className="title-last-name mb-0">Pawar</h3>
              </a>
            </div>
            <div className="social-icons">
              <a
                href="/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="/" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="/" target="_blank">
                <i className="fa-regular fa-envelope"></i>
              </a>
              <a
                href="/"
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Footer