
import React from "react";
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const logout = async () => {
        await fetch('https://localhost:44374/api/Auth/logout', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
        });
        props.setIdLogin(0);
    }
    let menuLoginRegister;

    if (props.idLogin===0) {
        menuLoginRegister = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link " >Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        )
    }
    else {
        menuLoginRegister = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>
                {/*
                button to redirect accout details
                <div>
                    <Link to="/" >Test</Link>
                </div>

                */}

                <div >
                    {menuLoginRegister}

                </div>
            </div>
        </nav>
    );
};

export default Nav;