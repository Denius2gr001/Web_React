import React, {Component} from 'react';
import logo from "../assets/Logo.png";
import down_icon from "../assets/down-icon.png";

export default class Shedule extends Component{
    render(){
        return(
            <div className="blog" id="Schedule">
                <div className="blog-container">
                    <div className="heading">
                        <h2 className="heading-h2">Schedule</h2>
                        <h3 className="electoral">Electoral disciplines</h3>
                        <div className="circle-container">
                            <div className="circle circle-grey"></div>
                        </div>
                    </div>
                    <div className="vyplist">
                        <select id="selectvalue1">
                            <option value="Право">Право</option>
                            <option>Підприємницьке право</option>
                            <option>Law</option>
                            <option>Інформаційна безпека</option>
                            <option>Правознавство</option>
                        </select>
                        <select id="selectvalue2">
                            <option>Право</option>
                            <option>Підприємницьке право</option>
                            <option>Law</option>
                            <option>Інформаційна безпека</option>
                            <option>Правознавство</option>
                        </select>
                        <select id="selectvalue3">
                            <option>Право</option>
                            <option>Підприємницьке право</option>
                            <option>Law</option>
                            <option>Інформаційна безпека</option>
                            <option>Правознавство</option>
                        </select>
                        <select id="selectvalue4">
                            <option>Право</option>
                            <option>Підприємницьке право</option>
                            <option>Law</option>
                            <option>Інформаційна безпека</option>
                            <option>Правознавство</option>
                        </select>
                        <select id="selectvalue5">
                            <option>Право</option>
                            <option>Підприємницьке право</option>
                            <option>Law</option>
                            <option>Інформаційна безпека</option>
                            <option>Правознавство</option>
                        </select>
                    </div>
                    

                    
                    <div className="onoffswitch">
                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked />
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                        </label>
                    </div>
                    <div className="container">
                        <div className="days1part">
                            
                            <div className="Day-of-week1">
                                <p className="pl">Monday</p>
                                <ol>
                                    
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                </ol>

                            </div>
                            <div className="Day-of-week1">
                                <p className="pl">Tuesday</p>
                                <ol>
                                    
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                </ol>

                            </div>
                            <div className="Day-of-week1">
                                <p className="pl">Wendnesday</p>
                                <ol>
                                    
                                    <li class = "listSubject">Правознавство</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                </ol>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="days2part">
                            <div className="Day-of-week2">
                                <p className="pl">Thursday</p>
                                <ol>
                                    
                                    <li class = "listSubject">Правознавство</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                </ol>

                            </div>
                            <div className="Day-of-week2">
                                <p className="pl">Friday</p>
                                <ol>
                                    
                                    <li class = "listSubject">Методи обробки інформаціїї</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                    <li class = "listSubject">Право</li>
                                </ol>

                            </div>

                        </div>
                    </div>        
                </div>
            </div>
        )
    }
}