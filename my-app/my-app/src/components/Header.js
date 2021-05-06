import React, {Component} from 'react';
import logo from "../assets/Logo.png";
import down_icon from "../assets/down-icon.png";

import Slider from "react-slick";
import { Link, animateScroll as scroll } from "react-scroll";

import $ from "jquery";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="slick-next-button" onClick={onClick}>
            <i className="fas fa-chevron-right"></i>
        </div>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="slick-prev-button" onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </div>
    );
}

export default class Header extends Component{
    humbOpen() {
        $(".hamburger").toggleClass("is-active");
        $(".nav-wrapper").toggleClass("nav-wrapper-mobile");
        $(".nav").toggleClass("nav-mobile");
        $(".nav-logo").toggleClass("display-none");
    }
    render(){
        const settings = {
            infinite: false,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1271,
                  settings: {
                    arrows: false,
                    dots: true,
                  },
                },
            ]
          };
        return(
            <header className="header">
                <div className="container header-flex-container">
                    <div className="nav-wrapper">
                        <div className="nav-logo"><a href="#"><img src={logo} alt="logo" /></a></div>
                        <nav className="nav">
                            <a className="nav-link nav-link-active" href="/">Home</a>
                            <Link
                            className="nav-link"
                            to="Schedule"
                            spy={true}
                            smooth={true}
                            duration= {700}
                            >Schedule</Link>
                            <Link
                            className="nav-link"
                            to="Gallery"
                            spy={true}
                            smooth={true}
                            duration= {700}
                            >Gallery</Link>
                            <Link
                            className="nav-link"
                            to="our-team"
                            spy={true}
                            smooth={true}
                            duration= {700}
                            >Our team</Link>
                            <Link
                            className="nav-link"
                            to="feedback"
                            spy={true}
                            smooth={true}
                            duration= {700}
                            >Contact</Link>
                            <a className="nav-link" href="/sign">Log in</a>
                        </nav>
                        <button className="hamburger hamburger--collapse" type="button" onClick={this.humbOpen.bind(this)}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <div className="header-slider">
                        <div className="header-slick-slider">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div className="header-slick-slider-item">

                                <h1 className="header-slick-slider-item-h1">Welcome to DA-82</h1>
                                <div className="circle-container">
                                    <div className="circle"></div>
                                </div>

                                <div className="header-slick-slider-item-buttons">
                                    <a href="https://air2.parimatch.com/ru/">
                                        <button className="button button-filled header-button">
                                            Join us via Instagram
                                        </button>
                                    </a>

                                </div>
                            </div>

                            <div className="header-slick-slider-item">

                                <h1 className="header-slick-slider-item-h1">Group of IASA DA-82</h1>
                                <div className="circle-container">
                                    <div className="circle"></div>
                                </div>

                                <div className="header-slick-slider-item-buttons">
                                    <a href="https://www.flashscore.com.ua/hockey/">
                                        <button className="button button-filled header-button">
                                            Join us via Telegram
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                    <div className="header-down-icon">
                        <a href="#feedback" className="header-down-icon-link"
                        ><img src={down_icon} /></a>
                    </div>
                </div>
            </header>
        )
    }
}