import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/Backgroung.jpeg";
import Common from "./Common";


const Home = () => {
    return (
        <>
        <Common  name= 'Come Alone, Leave with a new lesson!' 
         imgsrc={web} 
         visit= "/service"
         btname= "Get Started"
        />
        
        
        </>

    );

};
export default Home;