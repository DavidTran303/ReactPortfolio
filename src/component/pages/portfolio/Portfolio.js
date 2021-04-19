import React from 'react'
import image from '../portfolio/adventureops.png';
import  image1 from '../portfolio/chatengine.png';
import image2 from '../portfolio/theactivist.png';
import '../portfolio/app.css';
const Portfolio = () => {
    return (
        <>
 <section className="container-fluid">
    <div className="row">
        <div className="col-sm card">
            <div>
                <img src={image2} alt="E-Commerce" aria-label="E-Commerce Website"/>
                <div>
                    <a href="https://github.com/DavidTran303/TheActivist" className="btn-main-offer">The Activist</a>
                </div>
            </div>
        </div>
        <div className="col-sm card">
            <div>
                <img src={image1}alt="WeatherDashboard" aria-label="A picture of WeatherDashboardApp."/>
                <div>
                    <a href="" className="btn-main-offer">Chat Engine</a>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-sm card">
            <div>
                <img src="" alt="Zoom Reclone" aria-label="Zoom Reclone"/>
                <div>
                    <a href="https://github.com/DavidTran303/ZoomReclone" className="btn-main-offer">Zoom Reclone</a>
                </div>
            </div>
        </div>
        <div className="col-sm card">
            <div>
                <img src={image}alt="Art" aria-label="A picture of what I think art is."/>
                <div>
                    <a href="https://adventureops.herokuapp.com/login" className="btn-main-offer">Adventureops</a>
                </div>
            </div>
        </div>
    </div>
</section> 
        </>
    )
}

export default Portfolio
