import React from 'react'
import imageaboutme from './aboutme.jpeg';


const Aboutme = () => {
    return (
        <>
       <article class="card  contain-fluid">
    <div class="row card-body">
        <div class="col-sm-4">
                <div class="card bootstrap-card"> 
                <img class="card-img-top" src={imageaboutme} alt="Card image cap" aria-label="An image of myself."/>
                </div> 
        </div>
        <div class = "col-sm-8"> 
            <p1 class="card-text1">As a University of Denver alumni that graduated with a 4.0, I am confident that I have what it takes to be a part of your web development team with my expertise in modern HTML/CSS, JavaScript, ReactJS, NodeJS, MongoDB, SQL, Algorithms, Amazon Web Services, and REST APIs. Even though I graduated from a Coding Bootcamp rather than a traditional University, I have no doubt you wouldn’t regret giving me a chance to prove myself for what I can bring to your team! 
            <br/>
            I currently have no experience in the web development industry but I really want to be part of your company’s web development team in order to learn more about complex codes that can be used in everyday life. On my free time, I am currently trying to reclone Facebook and Amazon from scratch while trying to learn Python and C++.
            Learning these new languages and attending the boot camp helped me explore my skills and creativity. As a result, I realized everything that I have tried up to now, that I truly enjoy this career because it allows for endless creativity. I believe this has helped me immensely when it comes to conceptualizing projects because I can think about the end goal and the experiences of the users. 
            <br/>
            I would be honored to bring my skills, passion, and work ethic to support your company’s team. I am sure that I would work harder than everyone else because although I’m the least experienced in order to help the company goals. Finally, I thank you for taking the time to read my cover letter.
            <br/>
            </p1>
               
        </div>
    </div>
    </article>
        </>
    )
}

export default Aboutme
