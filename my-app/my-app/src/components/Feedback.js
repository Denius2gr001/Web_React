import React, {Component} from 'react';
import logo from "../assets/Logo.png";
import down_icon from "../assets/down-icon.png";

export default class Feedback extends Component{
    render(){
        return(
            <div className="feedback" id="feedback">
                <div className="container">
                    <div className="heading">
                        <h2 className="heading-h2">Keep in Touch</h2>
                        
                        <div className="circle-container">
                        <div className="circle circle-grey"></div>
                        </div>
                    </div>
                    <div className="feedback-info">
                        <address className="feedback-info-address">
                            <h3 className="feedback-info-address-h3">our adress</h3>
                            <p className="heading-p feedback-info-address-p">
                            19 Panasa Mirny street, Kyiv, 03056
                            </p>
                            <h3 className="feedback-info-address-h3">call us</h3>
                            <p className="heading-p feedback-info-address-p"><a className="linkstel" href="tel:+380994762381">
                            +380994762381 </a></p><br />
                            <p className="heading-p feedback-info-address-p"><a className="linkstel" href="tel:+380994364532">+380994364532</a>
                            </p>
                            <h3 className="feedback-info-address-h3">email us</h3>
                            <p className="heading-p feedback-info-address-p"><a className="linkstel" href="mailto:iasa-da-82@ukr.net">iasa-da-82@ukr.net</a></p>
                        </address>
                        <form className="feedback-info-form">
                            <input className="feedback-info-form-input" placeholder="Name" />
                            <input className="feedback-info-form-input" placeholder="Email" />
                            <input className="feedback-info-form-input" placeholder="Subject" />
                            <textarea
                            className="feedback-info-form-textarea"
                            placeholder="Message"
                            ></textarea>
                            <button className="button feedback-button">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}