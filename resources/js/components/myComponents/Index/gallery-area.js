import React, { Component } from 'react'



export default class galleryArea extends Component {
    render() {
        return (
            <section className="gallery-area">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
                        <div className="gallery-box">
                            <div className="single-gallery">
                                <div className="gallery-img" ></div>
                                <div className="cap-icon">
                                    <a href="assets/img/gallery/gallery1.png" className="ti-fullscreen img-pop-up"></a>
                                </div>
                                <div className="g-caption">
                                    <h4>The Last man</h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="gallery-box">
                            <div className="single-gallery">
                                <div className="gallery-img"></div>
                                <div className="cap-icon">
                                    <a href="assets/img/gallery/gallery2.png" className="ti-fullscreen img-pop-up"></a>
                                </div>
                                <div className="g-caption">
                                    <h4>The Last man</h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
