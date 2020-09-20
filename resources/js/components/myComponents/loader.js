import React, { Component } from 'react'

export default class loader extends Component {
    render() {
        return (
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div class="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
