import React from 'react'
import "./Section.scss"
import Image1 from "../assets/Projects/project-1.png"
import Image2 from "../assets/Projects/project-2.png"
import Image3 from "../assets/Projects/project-3.png"

function WorkSection() {
  return (
    <section class="latest-works d-none d-md-block">
      <div class="container">
        <div class="d-flex justify-content-between w-100 flex-wrap">
          <div class="left-project">
            <div class="latest-work-title">
              <h3>Latest Works</h3>
              <p>Perfect solutions for digital experience</p>
            </div>
            <div class="project-card project-card-1">
              <div class="title">
                <h3>Finaco</h3>
                <div class="tech-stack">
                  <p>GastbyJS</p>
                  <p>ReactJS</p>
                  <p>HTML</p>
                </div>
              </div>
              <img
                src={Image1}
                alt=""
                class="project-img-2"
              />
            </div>

            <div class="all-projects">
              <a href="/">
                <h3>ALL PROJECTS</h3>
              </a>
              <p>
                * Some projects are not allowed to publish by NDA<br />if you
                want to see more. <a href="/">CONTACT</a>
              </p>
            </div>
          </div>
          <div class="right-project">
            <div class="project-card project-card-2">
              <div class="title">
                <h3>Lewis</h3>
                <div class="tech-stack">
                  <p>Flutter</p>
                  <p>Django</p>
                </div>
              </div>
              <img
                src={Image2}
                alt=""
                class="project-img-1"
              />
            </div>
            <div class="project-card project-card-3">
              <div class="title">
                <h3>Focus</h3>
                <div class="tech-stack">
                  <p>ReactJS</p>
                  <p>HTML</p>
                </div>
              </div>
              <img
                src={Image3}
                alt=""
                class="project-img-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection