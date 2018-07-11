import React, { Component } from 'react';

import './About.css';
import aboutMeImg from './images/aboutMeImg.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h1 className="aboutHeading">About us</h1>
                <h2 className="aboutInfoHeading">Tech Shop is a individual project for SoftUni
                Course ReactJS Fundamentals. It is a simple tech e-commerse site.</h2>
                <h3 className="aboutMeHeading">About me:</h3>
                <h4 className="aboutMeInfo">My name is Lubomir Valev and i am 18 years old from Karlovo, Bulgaria!</h4>
                <img className="aboutMeImg" src={aboutMeImg} alt="AboutMePicture" />
            </div >
        )
    }
}