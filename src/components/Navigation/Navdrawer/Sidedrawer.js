import React from  'react';
import {Link} from 'react-router-dom';
import './actualsidedrawer.css';  
import awareimg from '../images/covid.jpg'  

const sideDrawer = props =>{
    let drawerclass= 'sidedrawer'
    if(props.show){
        drawerclass = 'sidedrawer open';
    }
    return(
        <nav className={drawerclass}>
                <img src={awareimg} className="awareimg"/>
            <ul>
                <li><Link to="/chart">Chart</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/contact us">Contact us</Link></li>
            </ul>
        </nav>
    );
};



export default sideDrawer