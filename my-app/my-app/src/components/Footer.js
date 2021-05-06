import React, {Component} from 'react';
import logo from "../assets/Logo.png";
import down_icon from "../assets/down-icon.png";

import $ from "jquery";

export default class Footer extends Component{
    toTop() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    }
    render(){
        return(
            <footer className="footer">
                <div className="footer-button-up" onClick={this.toTop.bind(this)}><i className="fas fa-chevron-up"></i></div>
                    <div className="container">
                        <div className="footer-flex">
                        <div className="footer-social">
                            <a href="#"><i className="fab fa-facebook-f footer-icon"></i></a>
                            <a href="#"><i className="fab fa-twitter footer-icon"></i></a>
                            <a href="#"><i className="fab fa-google-plus-g footer-icon"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in footer-icon"></i></a>
                            <a href="#"><i className="fab fa-skype footer-icon"></i></a>
                        </div>
                        <div className="footer-copyright">© All Rights Reserved</div>
                    </div>
                </div>
            </footer>
        )
    }
}