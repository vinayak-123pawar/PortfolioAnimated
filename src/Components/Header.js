import React from 'react'
import "./Section.scss"
import Modal from 'react-modal';
import { Col, Container, Row } from 'react-bootstrap-v5';


// const Header = ({ onLogout }) => {
function Header() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="header w-100 d-flex align-items-center">
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-between flex-wrap"
        >
          <div className="navbar-title">
            <h3 className="title-first-name mb-0">Vinayak</h3>
            <h3 className="title-last-name mb-0">Pawar</h3>
          </div>

          {/* <div>
            <button className="glow-on-hover" onClick={onLogout}>
              Logout
            </button>
          </div> */}
          <div>
            <button  className="glow-on-hover" onClick={openModal}>Personal Info</button>
            <Modal
              className="ModelInfo"
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              preventScroll={false}
            >
              <Container>
                <div className='d-flex align-items-center justify-content-between py-3'>
                  <h2>Hello</h2>
                  <button  className="glow-on-hover" onClick={closeModal}>close</button>
                </div>
                <Row>
                  <Col sm={6}>
                    
                  </Col>
                  <Col sm={6}></Col>
                </Row>
              </Container>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header