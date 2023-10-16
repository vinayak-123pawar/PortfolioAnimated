import React from 'react'
import adobe from "../assets/SVGIcons/adobe-photoshop.svg"
import premierePro from "../assets/SVGIcons/adobe-premiere-pro.svg"
import htmlLogo from "../assets/SVGIcons/html-5.svg"
import figmaLogo from "../assets/SVGIcons/figma.svg"
import cssLogo from "../assets/SVGIcons/css3.svg"
import javascriptLogo from "../assets/SVGIcons/javascript.svg"
import illustrator from "../assets/SVGIcons/adobe-illustrator.svg"
import Github from "../assets/SVGIcons/Github-Dark.svg"
import react from "../assets/SVGIcons/icons8-react-native.svg"
import cLogo from "../assets/SVGIcons/icons8-c-programming.svg"
import cpLogo from "../assets/SVGIcons/icons8-c.svg"
import java from "../assets/SVGIcons/icons8-java.svg"

import "./Section.scss"

function Content() {
    return (
        <section className="content-body">
            <div className="container h-100 overflow-hidden">
                <div className="row h-100">
                    <div className="col-sm-6 mobileHeight">
                        <div>
                            <div className="developer-intro">
                                <p>UI Developer</p>
                                <p>Frontend Developer</p>
                                <p>Designer</p>
                            </div>
                            <div className="body-title">
                                {/* <h1>Talk is cheap<br>Show me the code</h1>  */}
                                <h1>UI Developing: Coding<br />and Designing Magic</h1>
                                <p>
                                    I design and code beautifully simple things,<br />and I love
                                    what I do.
                                </p>
                            </div>
                            <div className="body-tail">
                                <h1>2</h1>
                                <p>YEARS<br />EXPERIENCE</p>
                                <h1>10</h1>
                                <p>PROJECTS<br />COMPLETED</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 MobileOverFlow">
                        <div className="position-relative h-100 AnimationWrapper">
                            <div className="background-circle d-none d-md-block"></div>
                            <div className="hoodie-guy"></div>
                            <div className="circle">
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 1 }}>
                                    <img src={adobe} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 2 }} >
                                    <img src={premierePro} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 3 }}>
                                    <img src={htmlLogo} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 4 }}>
                                    <img src={figmaLogo} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 5 }}>
                                    <img src={cssLogo} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 6 }}>
                                    <img src={javascriptLogo} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 7 }}                                >
                                    <img src={illustrator} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 8 }}       >
                                    <img src={Github} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 9 }}>
                                    <img src={react} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 10 }} >
                                    <img src={cLogo} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 11 }} >
                                    <img src={cpLogo} alt='' className='height70' />
                                </span>
                                <span className='d-flex align-items-center justify-content-center' style={{ '--i': 12 }}>
                                    <img src={java} alt='' className='height70' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content