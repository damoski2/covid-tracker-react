import React from 'react';
import covid from './images/covid.jpg';
import style from './Navbar.module.css';
import { BrowserRouter as Router, Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import DrawerToggleButton from './Navdrawer/DrawerToggleButton';

const Navbar = (drawerClickHandler, handle) => {

    return (
        <BrowserRouter>
            <header className={style.container}>
                <nav className={style.nav}>
                    <div className={style.logo}>
                        <div className={style.toggleicon}>
                            <DrawerToggleButton click={drawerClickHandler.drawerClickHandler} />
                        </div>
                        <img src={covid} className={style.image} />
                        <h1 className={style.H}><span>Corona</span> checker</h1>
                    </div>
                    <div className={style.links}>
                        <ul>
                            <li><Link to="/"  onClick={handle.handleScroll}>Chart</Link></li>
                            <li><Link to="/" onClick={handle.handleScroll}>Feedback</Link></li>
                            <li><Link to="/"  onClick={handle.handleScroll}>Contact us</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </BrowserRouter>
    )
}

export default Navbar

