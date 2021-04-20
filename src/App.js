import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import "./App.css";
import Header from './component/pages/Header';
import Aboutme from './component/pages/Aboutme/Aboutme';
import Portfolio from './component/pages/portfolio/Portfolio';
import Contacts from './component/pages/Contact/Contacts';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
  <Router basename={process.env.PUBLIC_URL}>
    <Navbar/>
        <Switch>
    <Route exact path="/" component={Header} /> 
     <Route exact path="/Aboutme" component={Aboutme} />
     <Route exact path="/Portfolio" component={Portfolio} />
     <Route exact path="/Contacts" component={Contacts} />
        </Switch>
   </Router>
    </>
  );
}

export default App;