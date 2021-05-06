import React, {Component} from 'react';
import logo from "../assets/Logo.png";
import down_icon from "../assets/down-icon.png";

export default class Team extends Component{
    render(){
        return(
            <div className="team" id="our-team">
            <div className="container team-container">
              <div className="heading team-heading">
                <h2 className="heading-h2 team-heading-h2">Our Team</h2>
                <p className="pl">
                  They can give you any information
                </p>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
              </div>
              <div className="team-box">
                <div className="team-avatar team-avatar-1">
                  <div className="team-info">
                    <h3 className="team-info-h3">Katya Prokopenko</h3>
                    <p className="team-info-p">Starosta</p>
                  </div>
                </div>
                <div className="team-avatar team-avatar-2">
                  <div className="team-info">
                    <h3 className="team-info-h3">Ischenko</h3>
                    <p className="team-info-p">Kurator</p>
                  </div>
                </div>
                <div className="team-avatar team-avatar-3">
                  <div className="team-info">
                    <h3 className="team-info-h3">Oleksandr Beznosyk</h3>
                    <p className="team-info-p">Informationist</p>
                  </div>
                </div>
                <div className="team-avatar team-avatar-4">
                  <div className="team-info">
                    <h3 className="team-info-h3">Tanya Kaliuzhna</h3>
                    <p className="team-info-p">Zam starosty</p>
                  </div>
                </div>
                <div className="team-avatar team-avatar-5">
                  <div className="team-info">
                    <h3 className="team-info-h3">Tolya Petrenko</h3>
                    <p className="team-info-p">Glavnyi</p>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
        )
    }
}