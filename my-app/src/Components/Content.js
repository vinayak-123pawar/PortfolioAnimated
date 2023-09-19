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
        <section id="content-body">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-sm-6 mobileHeight">
                        <div>
                            <div class="developer-intro">
                                <p>UI Developer</p>
                                <p>Designer</p>
                            </div>
                            <div class="body-title">
                                {/* <h1>Talk is cheap<br>Show me the code</h1>  */}
                                <h1>UI Developing: Coding<br />and Designing Magic</h1>
                                <p>
                                    I design and code beautifully simple things,<br />and I love
                                    what I do.
                                </p>
                                <a href="\">LET'S CHAT!</a>
                            </div>
                            <div class="body-tail">
                                <h1>2</h1>
                                <p>YEARS<br />EXPERIENCE</p>
                                <h1>20</h1>
                                <p>PROJECTS<br />COMPLETED</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 MobileOverFlow">
                        <div class="position-relative h-100 AnimationWrapper">
                            <div class="background-circle"></div>
                            <div class="hoodie-guy"></div>
                            <div class="circle">
                                <span style={{ '--i': 1 }}>
                                    <img src={adobe} alt='' className='height75' />
                                </span>
                                <span style={{ '--i': 2 }} >
                                    <img src={premierePro} alt='' className='height75' />
                                </span>
                                <span style={{ '--i': 3 }}>
                                    <img src={htmlLogo} alt='' className='height75' />
                                </span>
                                <span style={{ '--i': 4 }}>
                                    <img src={figmaLogo} alt='' className='height75' />
                                </span>
                                <span style={{ '--i': 5 }}>
                                    <img src={cssLogo} alt='' className='height75' />
                                </span>
                                <span style={{ '--i': 6 }}
                                ><img src={javascriptLogo} alt='' className='height75'
                                    /></span>
                                <span style={{ '--i': 7 }}
                                ><img
                                        src={illustrator}
                                        alt='' className='height75'
                                    /></span>
                                <span style={{ '--i': 8 }}
                                ><img src={Github} alt='' className='height75'
                                    /></span>
                                <span style={{ '--i': 9 }}
                                ><img
                                        src={react}
                                        alt='' className='height75'
                                    /></span>
                                <span style={{ '--i': 10 }} >
                                    <img src={cLogo} alt='' className='height75' />
                                </span>
                                <span style={{ '--i': 11 }} >
                                    <img src={cpLogo} alt='' className='height75' />
                                </span>
                                <span style={{ '--i': 12 }}>
                                    <img src={java} alt='' className='height75' />
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