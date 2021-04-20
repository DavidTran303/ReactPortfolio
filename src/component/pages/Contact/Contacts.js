import React from 'react';
import contact from './portfolio6.jpeg'
import './app.css';

const Contacts = () => {
    return (
        <>
    <div class="cardContact">
  <img class="card-img-top" src={contact} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">David Tran</h5>
    <p class="card-text">Email: davtran303@gmail.com</p>
    <a href="https://www.linkedin.com/in/david-tran-8b918817a/" class="btn btn-primary">LinkedIn</a>
    <a href="https://www.linkedin.com/in/david-tran-8b918817a/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACpibw0BDKhwZ2kFIg51mA5p7Ms95jjXBqo,1615415789841)/" class="btn btn-primary">Resume</a>
  </div>
</div>
        </>
    )
}

export default Contacts
