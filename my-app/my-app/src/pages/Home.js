import React, {Component} from 'react';
import Header from "../components/Header";
import Shedule from "../components/Shedule";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

export default class Home extends Component{
    render(){
        return(
            <>
            <Header />
            <Shedule />
            <Gallery />
            <Team />
            <Feedback />
            <Footer />
            </>
        )
    }
}