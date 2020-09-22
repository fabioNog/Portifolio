import React, {Component} from 'react';

import Header from './header';
import Loader from './loader';
import Main from './main';
import AboutArea from './about-area';
import HomeBlogArea from './home-blog-area';
import GalleryArea from './gallery-area';
import BrandArea from './brand-area';
import TestimonialArea from './testimonial-area';
import Footer from './footer';
import BackTop from './back-top';


export default class Index extends Component{    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Loader/>                
                <Header/>
                <Main/>
                <TestimonialArea/>
                <AboutArea/>
                <HomeBlogArea/>
                <GalleryArea/>
                {/* <BrandArea/> */}
                <Footer/>   
                <BackTop/>
            </div>            
        )
    }
}
