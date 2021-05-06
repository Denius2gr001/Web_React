import React, {Component} from 'react';
import logo from "../assets/Logo.png";
import down_icon from "../assets/down-icon.png";

export default class Sign extends Component{
    render(){
        return(
            <>
            <div className="container-sign">
                <div className="frame">
                    <div className="nav">
                        <ul className="links">
                        <li className="signin-active"><a className="btn">Log in</a></li>
                        <li className="signup-inactive"><a className="btn">Sign up </a></li>
                        </ul>
                    </div>
                    <div ng-app="true" ng-init="checked = false">
                        <form className="form-signin" action="" method="post" name="form">
                            <div className="alertSignInError"><span>ERROR: You have empty fields!</span></div>
                            <label htmlFor="username">Username</label>
                            <input id="usernameSignin" className="form-styling" type="text" name="username" required/>
                            <label htmlFor="password">Password</label>
                            <input id="passwordSignin" className="form-styling" type="password" name="password" placeholder=""/>
                            <input type="checkbox" id="checkbox"/>
                            
                            <div className="btn-animate">
                                <a className="btn-signin">Log in</a>
                            </div>
                        </form>
                        
                        <form className="form-signup" action="" method="post" name="form">
                            <div className="alertSignUpError"><span>ERROR: You have empty fields!</span></div>
                            <label htmlFor="fullname">Full name</label>
                            <input id="fullnameSignUp" className="form-styling" type="text" name="fullname" placeholder=""/>
                            <label htmlFor="email">Email</label>
                            <input id="emailSignUp" className="form-styling" type="text" name="email" placeholder=""/>
                            <label htmlFor="password">Name of group</label>
                            <input id="nameofgroupSignUp" className="form-styling" type="text" name="nameofgroup" placeholder=""/>
                            <label htmlFor="confirmpassword">Password</label>
                            <input id="passwordSignUp" className="form-styling" type="text" name="password" placeholder=""/>
                            <a ng-click="checked = !checked" className="btn-signup">Sign Up</a>
                        </form>

                        <div className="success">
                            <div className="success-animation">
                                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                            </div>
                            <div className="successtext">
                                <p> Thanks for signing up!<br/><a class ="gotomain" href = "/">Go back</a></p>
                                <a className="btn-goback" value="Refresh" onClick="history.go()">Go back</a>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h1 className="welcome">Welcome</h1>
                        <a className="btn-goback" href="/" value="Refresh" onClick="history.go()">Go back</a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}