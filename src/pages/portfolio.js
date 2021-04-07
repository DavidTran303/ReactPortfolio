import React from "react";
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';


function Portfolio(){
    return(
    <>
    <h1>Portfolio</h1>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="right" src="/images/adventureops.png" />
    <Card.Body>
    <Card.Title>The Activist</Card.Title>
    <Card.Text>
       <li>ReactJS</li>
       <li>Amazon Web Services(AWS)</li>
      <li>Axios</li>
      <li>Authentication0</li>
      <li>Semantic UI</li>
      <li>ReactDOM</li>
      </Card.Text>
    <Button href="https://github.com/DavidTran303/TheActivist">Github</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/project1.png" />
  <Card.Body>
    <Card.Title>GoFort</Card.Title>
    <Card.Text >
       <li>ReactJS</li>
      <li>Axios</li>
      <li>React Chat Engine</li>
      <li>React DOM</li>
      <li>Mongoose</li>
      <li>Nodemon</li>
    </Card.Text>
    <Button href="https://github.com/swhachey/GoFort">Github</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="right" src="/images/adventureops.png" />
  <Card.Body>
    <Card.Title>Adventureops</Card.Title>
    <Card.Text>
      <li>Sequelize</li>
      <li>MySQL</li>
      <li>Express</li>
      <li>Express-Handlebars</li>
      <li>Passport</li>
      <li>Talk.js</li>
       <li>MongoDB</li>
    </Card.Text>
    <Button href="https://adventureops.herokuapp.com/login">Github</Button>
  </Card.Body>
</Card>

 </>
    )
}

export default Portfolio ;
