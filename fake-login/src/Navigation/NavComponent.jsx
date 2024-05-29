import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavStyle.css';

export const NavComponent = () => {
    return (
        <nav className="nav">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
    );
}