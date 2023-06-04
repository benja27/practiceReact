import React from "react";

function Navbar() {
    return (
        <nav className="bg-dark text-white d-md-flex justify-content-between px-5 align-items-center d-none " >
            <img src="https://placeimg.com/200/200" ></img>
            <ul className="d-flex gap-5" >
                <li className="fs-4" > <a href="" >Home</a> </li>
                <li>About</li>
                <li>certificates</li>
                <li>Hello</li>
                <li>how r u doing?</li>
            </ul>
        </nav>  
    )
}

export default Navbar;  