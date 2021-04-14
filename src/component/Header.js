import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (
<div className="header-wraper">
 <div className="main-info">
            <h1></h1>
            <Typed
            className="typed-text"
            strings={["Hello!!", "My Name Is David Tran", "Please Feel Free To", "Navigate With The Navbar", "Have A Great A Day :)" ]}
            typeSpeed={45}
            backSpeed={10}
            />
     <a href="#" className="btn-main-offer">Portfolio</a>
     <a href="#" className="btn-main-offer">Contact</a>
    </div>
</div>
    )
}

export default Header
