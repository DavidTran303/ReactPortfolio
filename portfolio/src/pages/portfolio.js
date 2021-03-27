import React from "react";
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';


function Portfolio(){
    return(
    <>
    <h1>Portfolio</h1>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/project1.png" />
  <Card.Body>
    <Card.Title>Project 1</Card.Title>
    <Card.Text >
      First website ever built
    </Card.Text>
    <Button href="https://davidtran303.github.io/DuGroupProject1/">Github</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="right" src="/images/adventureops.png" />
  <Card.Body>
    <Card.Title>Adventureops</Card.Title>
    <Card.Text>
        First full stack application 
    </Card.Text>
    <Button href="https://adventureops.herokuapp.com/login">Github</Button>
  </Card.Body>
</Card>
 </>
    )
}

export default Portfolio ;
