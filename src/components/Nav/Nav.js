import React from "react";
import "./Nav.css";

class Nav extends React.Component {
    render() {
        return(
            <div className="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </div>
        )
    };
}
export default Nav;