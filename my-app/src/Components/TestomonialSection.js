import React from 'react'
import "./Section.scss"

function TestomonialSection() {
  return (
    <section class="testimonial">
      <div class="container">
        <div class="testimonial-title d-flex align-items-end">
          <h2 class="me-3 mb-0 TitleTesto">Testimonials</h2>
          <p class="m-0">What's client say about me</p>
        </div>
        <div class="testimonial-card">
          <div class="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>5.0 Rating</p>
          </div>
          <h4>
            Vinayak was a real pleasure to work with and we look forward to
            working with him again. He's definitely the kind designer you can
            trust with a project from start to finish
          </h4>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <div class="testimonial-card" style={{ display: "none" }}>
          <div class="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>4.5 Rating</p>
          </div>
          <h4>
            Working with Vinayak was a pleasure. Their expertise in both design
            and development allowed them to create a website that exceeded our
            expectations. We couldn't be happier with the end result.
          </h4>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <div class="testimonial-card" style={{ display: "none" }}>
          <div class="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>4.0 Rating</p>
          </div>
          <h4>
            I highly recommend Vinayak for any design or development project.
            They have the skills, experience, and passion to create stunning,
            functional solutions that will take your business to the next level.
          </h4>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <div class="row">
          <div class="col-sm-4 mb-4 mb-md-0">
            <div class="single-profile-card">
              <img src="assets/client-profile.png" alt="" />
              <div>
                <h4>Vinayak Pawar</h4>
                <p>VP & Co-Founder, <a href="/">Wiser</a></p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4 mb-md-0">
            <div class="single-profile-card">
              <img src="assets/client-profile.png" alt="" />
              <div>
                <h4>Vinayak Pawar</h4>
                <p>VP & Co-Founder, <a href="/">Wiser</a></p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4 mb-md-0">
            <div class="single-profile-card">
              <img src="assets/client-profile.png" alt="" />
              <div>
                <h4>Vinayak Pawar</h4>
                <p>VP & Co-Founder, <a href="/">Wiser</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestomonialSection