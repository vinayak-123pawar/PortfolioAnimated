import React from 'react'
import "./Section.scss"
import ProfileImage from "../assets/client-profile.png"

function TestomonialSection() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-title d-flex align-items-end">
          <h2 className="me-3 mb-0 TitleTesto">Testimonials</h2>
          <p className="m-0">What's client say about me</p>
        </div>
        <div className="testimonial-card">
          <div className="star-rating">
            <i class="fa fa-star-o" aria-hidden="true" style={{ color: "#fff705" }}></i>
            <i class="fa fa-star-o" aria-hidden="true" style={{ color: "#fff705" }}></i>
            <i class="fa fa-star-o" aria-hidden="true" style={{ color: "#fff705" }}></i>
            <i class="fa fa-star-o" aria-hidden="true" style={{ color: "#fff705" }}></i>
            <i class="fa fa-star-o" aria-hidden="true" style={{ color: "grey" }}></i>

            <p>4.0 Rating</p>
          </div>
          <h4>
            Vinayak was a real pleasure to work with and we look forward to
            working with him again. He's definitely the kind designer you can
            trust with a project from start to finish
          </h4>
          {/* <i className="fa-solid fa-quote-right aria-hidden="true"></i> */}
          <i class="fa fa-quote-left" aria-hidden="true"></i>

        </div>
        <div className="testimonial-card" style={{ display: "none" }}>
          <div className="star-rating">
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>4.5 Rating</p>
          </div>
          <h4>
            Working with Vinayak was a pleasure. Their expertise in both design
            and development allowed them to create a website that exceeded our
            expectations. We couldn't be happier with the end result.
          </h4>
          <i className="fa-solid fa-quote-right"></i>
        </div>
        <div className="testimonial-card" style={{ display: "none" }}>
          <div className="star-rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>4.0 Rating</p>
          </div>
          <h4>
            I highly recommend Vinayak for any design or development project.
            They have the skills, experience, and passion to create stunning,
            functional solutions that will take your business to the next level.
          </h4>
          <i className="fa-solid fa-quote-right"></i>
        </div>
        <div className="row">
          <div className="col-sm-4 mb-4 mb-md-0">
            <div className="single-profile-card">
              <div className='ImageProfile'><img src={ProfileImage} alt="" /></div>
              <div>
                <h4>Vinayak Pawar</h4>
                <p>Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestomonialSection