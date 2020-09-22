import React, { Component } from 'react'

export default class aboutHome extends Component {
    render() {
        return (
            <section className="about-area about1 section-padding30">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-caption2 mb-50">
                            <h3>HOW WE MAKE USER EXPERIENCES</h3>
                            <div className="send-cv">
                                <a href="#">hire@colorlib.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="about-caption mb-50">
                            <h3>You can’t use up creativity. The more you use, the
                                more you have in your signifant mind.</h3>
                            <p className="pera1"><span>SALVADOR DALI</span> Digital Artisit</p>
                            <div className="experience">
                                <div className="year">
                                    <span>05</span>
                                </div>
                                <div className="year-details"><p>YEARS OF<br/> DIGITAL EXPERIENCE</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape d-none d-xl-block">
                <img src="assets/img/gallery/about_shape.png" alt=""/>
            </div>
        </section>
        )
    }
}
