import React from 'react';
import "./Section.scss";
import "./Constant.js";
import { Info } from './Constant.js';
import { Col, Row } from 'react-bootstrap-v5';

function Introduction() {
  return (
    <section className="introduction">
      <div className="container">
        <div className="cards">
          <Row>
            {Info.map((Info) => (
              <Col sm={6}>
                <div>
                  <div className="design-card">
                    <div>
                      <h3>{Info.Role}</h3>
                      <img className='LogoWrap' key={Info.id} src={Info.src} alt={Info.Imagedescription} />
                    </div>
                    <p>{Info.Description}</p>
                    <a href="/">{Info.Quantity}</a>
                  </div>
                  <div className="introduction-text">
                    <p>{Info.IntroTitle}</p>
                    <h2>{Info.WelcomeIntro}</h2>
                    <h4>{Info.Work}</h4>
                    <p>{Info.Content} </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section >
  )
}

export default Introduction