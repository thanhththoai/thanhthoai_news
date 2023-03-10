import React from "react";
import './NavInshorts.css';
import Tab from "./Tab";

const NavInshorts = ({setCategory}) => {
    return(
        // <div className='nav'>
        //     <img style={{ cursor: "pointer"}}
        //     src='https://40.media.tumblr.com/744e1cab6a5e63a9d01fed4194acdfb3/tumblr_mocu3tO4yS1svn1xeo1_500.jpg'
        //     height="60%" alt="logo"
        //     />
            <div className='navigation'>
                <Tab  setCategory={setCategory}>
                </Tab>
            </div>
      

        //  </div>
    )
}
export default NavInshorts