import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (
<div className="header-wraper">
    <div className="main-info">
            <h1>Web Development and Websites </h1>
            <Typed
            className="typed-text"
            strings={["Hello", "My Name","Is", "David Tran", "I'm", "A","Full Stack", "Web", "Developer", "How", "Can", "I", "Help", "You", "Today?"]}
            typeSpeed={25}
            backSpeed={60}
            />
     <a href="#" className="btn-main-offer">Portfolio</a>
     <a href="#" className="btn-main-offer">Contact Me</a>
    </div>
</div>
    )
}

export default Header
