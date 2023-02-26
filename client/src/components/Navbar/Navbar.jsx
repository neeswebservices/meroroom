import React from 'react';
import './index.scss';

const Navbar = () => {
    return (
        <nav>
            <div className="right">
                <div className="logo">MeroRoom</div>
            </div>
            <div className="left">
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Room Available</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
