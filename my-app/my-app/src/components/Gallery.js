import React, {Component} from 'react';
import logo from "../assets/Logo.png";
import down_icon from "../assets/down-icon.png";

import '../scripts/slick-1.8.1/slick/slick.css';
import '../scripts/slick-1.8.1/slick/slick-theme.css';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <a className="next" onClick={onClick}>&#10095;</a>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <a className="previous" onClick={onClick}>&#10094;</a>
    );
}

export default class Gallery extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
        return(
            <div className="Gallery" id="Gallery">
                <hr/>
                <div className="heading">
                    <h2 className="heading-h2">Gallery</h2>
            
                    <div className="circle-container">
                        <div className="circle circle-grey"></div>
                    </div>
                </div>
                <div className="slider">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div className="item">
                            <img src="https://tproger.ru/s3/uploads/2020/07/field.jpg" />
                        </div>

        
                        <div className="item">
                            <img src="https://tproger.ru/s3/uploads/2020/07/rose.jpg" />
                        </div>

        
                        <div className="item">
                            <img src="https://tproger.ru/s3/uploads/2020/07/leaf.jpg" />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}