import React, { Component } from 'react'

export default class main extends Component {
    render() {
        const mystyle = {
            paddingTop: "50%!important",
            width: "50%!important"
          };
        return (
            <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-8">
                                <div className="hero__caption">
                                    <span data-animation="fadeInUp" data-delay=".4s" className="tituloHome">Software Developer</span>
                                    <h1 data-animation="fadeInUp" data-delay=".6s">Alavancamos o seu Negócio!</h1>
                                    <div className="hero__btn">
                                        <a href="industries.html" className="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Meu Portfolio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-man flip-container ">
                        <img 
                            className="imgHome flipper"
                            src="assets/img/fabio/fabio4.jpg"
                            alt=""
                            style={mystyle}
                        />
                    </div>
                </div>
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-8">
                                <div className="hero__caption">
                                    <span data-animation="fadeInUp" data-delay=".4s">Creative Photographey</span>
                                    <h1 data-animation="fadeInUp" data-delay=".6s">Photography Make us happy Take a shot.</h1>
                                    <div className="hero__btn">
                                        <a href="industries.html" className="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Watch Portfolio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-man">
                    <img 
                            className="imgHome"
                            src="assets/img/fabio/fabio4.jpg"
                            alt=""
                            style={mystyle}
                    />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
