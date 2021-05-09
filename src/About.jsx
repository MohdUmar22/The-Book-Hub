import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/home.jpeg";
import Common from "./Common";

const About = () => {
    return (
        <>

        <Common 
         name= 'Welcome to About page' 
         imgsrc={web} visit= "/service"
        btname= "Our Top Collections"
        />
        
        </>

    );

};
export default About;