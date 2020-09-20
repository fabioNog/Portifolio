import React, { Component } from 'react'

export default class main extends Component {
    render() {
        return (
            <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-8">
                                <div className="hero__caption">
                                    <span data-animation="fadeInUp" data-delay=".4s">Desenvolvedor Web em sonhos</span>
                                    <h1 data-animation="fadeInUp" data-delay=".6s">Alavancamos o seu Negocio! Otimizamos seu tempo.</h1>
                                    <div className="hero__btn">
                                        <a href="industries.html" className="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Meu Portfolio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-man">
                        <img src="assets/img/hero/hero_man1.png" alt=""/>
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
                        <img src="assets/img/hero/hero_man1.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
