import "./Preloader.css";
import preLoader from "../../../assets/images/preLoader.gif";
import React from 'react';

let Preloader = (props) => {
    return <img className="preLoader" alt="loader" src={preLoader}/>
    
}

export default Preloader;