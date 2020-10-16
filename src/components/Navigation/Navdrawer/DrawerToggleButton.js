import React from 'react';
import './Sidedrawer.css';


const DrawerToggleButton = props =>(
    <button onClick={props.click} className="togglebtn">
        <div className="togglebtn_line"/>
        <div className="togglebtn_line"/>
        <div className="togglebtn_line"/>
    </button>
);

export default DrawerToggleButton