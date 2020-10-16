import React from 'react';
import './Backdrop.css';

const backdrops = props=>(
    <div className="backdrop" onClick={props.backclose}></div>
)

export default backdrops