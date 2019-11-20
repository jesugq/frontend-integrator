import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';


const NavBarComponent = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Home</Link>
                <LoggedInLinks />
                <LoggedOutLinks />
            </div>
        </nav>
    )
}


export default NavBarComponent;