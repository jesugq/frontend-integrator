import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const LoggedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}


export default LoggedInLinks;