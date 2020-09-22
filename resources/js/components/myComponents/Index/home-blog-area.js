import React, { Component } from 'react'

export default class homeBlogArea extends Component {
    render() {
        return (
            <section className="home-blog-area section-padding30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/blog01.png" alt=""/>
                            </div>
                            <div className="team-caption">
                                <h3><a href="services.html">Creative Photography</a></h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/blog02.png" alt=""/>
                            </div>
                            <div className="team-caption">
                                <h3><a href="services.html">Wedding Photography</a></h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/blog03.png" alt=""/>
                            </div>
                            <div className="team-caption">
                                <h3><a href="services.html">Nature Photography</a></h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
