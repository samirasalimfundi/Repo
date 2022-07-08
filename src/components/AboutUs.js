import React from 'react';
import dr from './dr.jpg';
import znz from './znz.jpg';
import feri from './feri.jpg';
import boximg from './boximg.jpg';
import boxes from './boxes.jpg';
import trans from './trans.jpg';
import './AboutUs.css';
import { Form } from 'reactstrap';


function AboutUs() {
  return (
    <div>
        <h2>Packages Transferring Services </h2>
        <h3> From Dar-es-Salaam to Zanzibar</h3>
        <p> Welcome to get information</p>
        < img className = 'dar'src = {dr} 
        alt="first Image"/>
         < img className = 'boxes'src = {boxes} 
        alt="fifth Image"/>
         < img className = 'trans'src = {trans} 
        alt="six Image"/>
         < img className = 'znz'src = {znz} 
        alt="third Image"/>
        < img className = 'feri'src = {feri} 
        alt="second Image"/>
        < img className = 'boximg'src = {boximg} 
        alt="fourth Image"/>
       
       
       
       
        </div>
  );
}

export default AboutUs;