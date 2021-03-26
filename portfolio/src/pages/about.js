import React from "react";
import {Card,Button} from 'react-bootstrap';



function About(){
    return(
<>
    <h1>About Page</h1>
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>About Me</Card.Title>
    <Card.Text>
        <p1 class="card-text1">Greetings, my name is David Tran. I graduated highschool in 2019 and went
                to CU Denver to major in biology/chemistry for a year. However, I took a semster off in
                order to figure out what I wanted to do. Then I stumble upon DU's coding boot camp which
                already changed my life. I never knew how fun and aesthically pleasing coding can be. The
                bootcamp really sparked this passion and love for coding. Personally, I have ADHD so I tend
                to get bored of things quickly. But every time I code, it always bring me to a new
                adventure.</p1>
                <p2 class="aboutmep2"> My goal at the end of this boot camp is to find a long lasting career in the coding industry.Like an art-style coding company pick me up to design aesthic website, logos, pictures, and etc.
                </p2>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</>
)
}

export default About;