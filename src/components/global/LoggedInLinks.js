import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const LoggedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(LoggedInLinks);