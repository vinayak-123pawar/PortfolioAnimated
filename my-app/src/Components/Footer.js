import React, { useState } from 'react'
import "./Section.scss"

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await response.json();
      console.log('Server response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <section
      id="footer"
      class="d-flex align-items-center justify-content-center"
    >
      <div class="container">
        <div class="row">
          <div class="footer-left col-sm-6">
            <div class="footer-email-intro">
              <p class="mt-0">Information</p>
              <h6>
                A/P:-Alkud(M) Tal:-Kavthe Mahankal Dist:-Sangli, India,
                Pin-416419
              </h6>
              <h3>pawar0101vinayak@gmail.com</h3>
            </div>
            <div class="footer-nav-menu">
              <ul class="footer-menu ps-0">
                <li class="ps-0"><a href="/">Service</a></li>
                <li class="ps-0"><a href="/">Works</a></li>
                <li class="ps-0"><a href="/">Notes</a></li>
                <li class="ps-0"><a href="/">Contacts</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <h2 class="mb-4">Let's make something amazing together</h2>

            <div class="email-form">
              <h2 class="mb-4">Start by <span>saying hi</span></h2>
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <input
                  class="w-50 me-2"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  class="w-50"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                class="d-flex justify-content-center align-items-center mb-4"
              >
                <input
                  class="w-50 me-2"
                  type="number"
                  name="phone-number"
                  id=""
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <button onClick={handleSendMessage} type="submit">Send</button>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-4">
            <div class="footer-title">
              <h3 class="title-first-name mb-0">Vinayak</h3>
              <h3 class="title-last-name mb-0">Pawar</h3>
            </div>
            <div class="social-icons">
              <a
                href="/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="/" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="/" target="_blank">
                <i class="fa-regular fa-envelope"></i>
              </a>
              <a
                href="/"
                target="_blank"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="/"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer