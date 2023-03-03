import React, { useState } from "react";
import "./index.scss";
import {
    AiFillFacebook,
    AiFillYoutube,
    AiFillGithub,
    AiFillApi,
} from "react-icons/ai";

const Footer = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <dialog open={open}>
                Hello <button onClick={(e) => setOpen(false)}>Close</button>
            </dialog>

            <footer>
                <button onClick={(e) => setOpen((prev) => !prev)}>
                    Privacy Policy
                </button>
                <p>
                    Copyright &copy; neeswebservices | 2015 - 23 All right
                    reserved.
                </p>
                <div className="socials">
                    <AiFillFacebook className="ico" />
                    <AiFillYoutube className="ico" />
                    <AiFillGithub className="ico" />
                </div>
            </footer>
        </>
    );
};

export default Footer;
