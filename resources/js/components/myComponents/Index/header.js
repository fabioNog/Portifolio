import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    // Declare uma nova variável de state, a qual chamaremos de "count"
    const [count, setCount] = useState(0);

    return (

        <div className="header-area header-transparent">
            <div className="main-header  header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                                <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                            <div className="menu-main d-flex align-items-center justify-content-end">
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/teste">Sobre</Link></li>
                                            <li><a href="gallery.html">Minhas Fotos</a></li>
                                            <li><a href="services.html">Serviços</a></li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog_details.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Element</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Me Contacte</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right-btn f-right d-none d-lg-block ml-20">
                                    <Link to="/login" className="btn header-btn">Login</Link>
                                </div>
                                <div className="header-right-btn f-right d-none d-lg-block ml-20">
                                    <a href="contact.html" className="btn header-btn .btnRegister">Register</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

