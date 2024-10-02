import React from "react";

function Navbar() {
    return (
        <nav className="Menu">
            <a href="http://www.naver.com" style={{ textDecoration: "none", color: "white"}}>네이버   </a>
            <a href="http://www.google.com" style={{ textDecoration: "none", color: "white"}}>구글   </a>
            <a href="http://openai.com" style={{ textDecoration: "none", color: "white"}}>오픈AI</a>
        </nav>
    )
}

export default Navbar