import React from 'react'
import "./Section.scss"
import Image1 from "../Images/QualitiaSoft.PNG"
import Image2 from "../Images/Utech.PNG"
import Image3 from "../Images/Spolto.PNG"
import { Col, Row } from 'react-bootstrap-v5'

function WorkSection() {
  return (
    <section className="latest-works d-none d-md-block">
      <div className="container">
        <Row>
          <Col md={6}>
            <div className="latest-work-title">
              <h3>Latest Works</h3>
              <p>Perfect solutions for digital experience</p>
            </div>
            <div className="project-card project-card-1">
              <div className="title">
                <h3>Qualitia</h3>
                <div className="tech-stack">
                  <p>ReactJS</p>
                  <p>HTML</p>
                  <p>Scss</p>
                </div>
              </div>
              <img
                src={Image1}
                alt=""
                className="project-img-2"
              />
            </div>

            <div className="all-projects">
              <a href="/">
                <h3>ALL PROJECTS</h3>
              </a>
              <p>
                * Some projects are not allowed to publish by NDA<br />if you
                want to see more. <a href="tel:9767788981">CONTACT</a>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="project-card project-card-2">
              <div className="title">
                <h3>Utech</h3>
                <div className="tech-stack">
                  <p>ReactJS</p>
                  <p>HTML</p>
                  <p>Css</p>
                  <p>Tailwind Css</p>
                </div>
              </div>
              <img
                src={Image2}
                alt=""
                className="project-img-1"
              />
            </div>
            <div className="project-card project-card-3">
              <div className="title">
                <h3>Spolto</h3>
                <div className="tech-stack">
                  <p>ReactJS</p>
                  <p>HTML</p>
                  <p>Scss</p>
                </div>
              </div>
              <img
                src={Image3}
                alt=""
                className="project-img-3"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default WorkSection