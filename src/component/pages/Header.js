import React from 'react';
import Typed from "react-typed";
import Particles from 'react-particles-js';

const Header = () => {
    return (
        <>  
<Particles 
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true
          }
        },
        shape:{
          type:"triangle",
          stroke:{
            width: 8,
            color:"pink"
          }
        }
      }
    }}
    /> 
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
</>
    )
}

export default Header
