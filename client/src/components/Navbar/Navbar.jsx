import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="center">
                <div className="right">
                    <Link className="logo link" to={"/"}>
                        Meroroom
                    </Link>
                </div>
                <div className="left">
                    <ul>
                        <Link className="link" to={"/about"}>
                            About
                        </Link>
                        <li>Register</li>
                        <li>Login</li>
                        <li>Updates</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
