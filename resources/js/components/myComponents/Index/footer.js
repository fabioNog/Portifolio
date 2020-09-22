import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-area footer-bg">
                    <div className="container">
                        <div className="footer-top footer-padding">
                            <div className="row d-flex justify-content-between">
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-logo">
                                            <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p className="info1">Grabbing the concsumer’s attention isn’t enough you have to keep that attention for at least a.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Navigation</h4>
                                            <ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">Events</a></li>
                                                <li><a href="#">Testimonial</a></li>
                                                <li><a href="#">Categories</a></li>
                                                <li><a href="#">Contacts</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Useful Links</h4>
                                            <ul>
                                                <li><a href="#">Registration</a></li>
                                                <li><a href="#">Login</a></li>
                                                <li><a href="#">Policy</a></li>
                                                <li><a href="#">Terms & Conditions</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Instagram Feed</h4>
                                        </div>
                                        <div className="instagram-gellay">
                                            <ul className="insta-feed">
                                                <li><a href="#"><img src="assets/img/gallery/instagram1.png" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/img/gallery/instagram2.png" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/img/gallery/instagram3.png" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/img/gallery/instagram4.png" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/img/gallery/instagram5.png" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/img/gallery/instagram6.png" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-xl-3 col-lg-4">
                                    <div className="footer-social f-right">
                                        <span>Follow Us</span>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fas fa-globe"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
