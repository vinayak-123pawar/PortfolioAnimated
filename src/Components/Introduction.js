import React from 'react'
import "./Section.scss"

function Introduction() {
  return (
    <section className="introduction">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 d-flex align-items-center">
            <div className="cards">
              <div className="design-card">
                <div>
                  <h3>UI/UX Design</h3>
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <p>Create design products with unique ideas that matters</p>
                <a href="/">3 PROJECTS</a>
              </div>
              <div className="design-card">
                <div>
                  <h3>Frontend Development</h3>
                  <i className="fa-solid fa-code"></i>
                </div>
                <p>Making the Web Look Good</p>
                <a href="/">8 PROJECTS</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="introduction-text">
              <p>Introduction</p>
              <h2>Hello! I'm Vinayak Pawar</h2>
              <h4>Crafting User Experiences that Delight and Inspire</h4>
              <p>
                I am a UI/UX designer who loves to create engaging and
                delightful user experiences for web and mobile applications. I
                use my skills in user research, design thinking, and prototyping
                to craft interfaces that are not only aesthetically pleasing,
                but also easy to use and navigate. Making it a very smooth and
                delightful experience for the clients
              </p>
            </div>
            <div className="introduction-text" style={{ display: "none" }}>
              <p>Introduction</p>
              <h2>Hello! I'm Vinayak Pawar</h2>
              <h4>The Web's & Mobile's Magician</h4>
              <p>
                As a frontend developer, I create stunning and responsive web
                pages that capture the attention and imagination of the users. I
                use my skills in HTML, CSS, JavaScript, and various frameworks
                and libraries to design and implement user interfaces that are
                both visually appealing and user-friendly.
              </p>
            </div>
            <div className="introduction-text" style={{ display: "none" }}>
              <p>Introduction</p>
              <h2>Hello! I'm Vinayak Pawar</h2>
              <h4>Coding with Efficiency</h4>
              <p>
                As a backend developer, I create robust and scalable web
                applications that handle the logic and data behind the scenes. I
                use my skills in Python, Django, SQL, and various APIs and tools
                to develop and deploy backend systems that are secure, reliable,
                and efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction