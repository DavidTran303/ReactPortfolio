import React from "react";
import images from "../images/aboutme.jpg"



function Contact(){
    return(
    
    <div>
    <h1>Contact Page</h1>
   <div className="card" />
  <img className="card-img-top" src={Image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">David Tran</h5>
    <li className="card-text">Email: davtran303@gmail.com</li>
    <li className="card-text">Github: DavidTran303</li>
    <a href="https://www.linkedin.com/in/david-tran-8b918817a/" className="btn btn-primary">LinkedIn</a>
    <a href="https://www.linkedin.com/in/david-tran-8b918817a/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACpibw0BDKhwZ2kFIg51mA5p7Ms95jjXBqo,1615415789841)/" className="btn btn-primary">Resume</a>
  </div>
    <div/>
    </div>
    
    )
}

export default Contact;