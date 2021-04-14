import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import "./App.css";
import Header from './component/pages/Header';
import Aboutme from './component/pages/Aboutme';
import Portfolio from './component/pages/Portfolio';
import Contacts from './component/pages/Contacts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
  <Router baseman={process.env.PUBLIC_URL}>
    <Navbar/>
        <Switch>
    <Route path="/" component={Header} /> 
     <Route path="/Aboutme" component={Aboutme} />
     <Route path="/Portfolio" component={Portfolio} />
     <Route path="/Contacts" component={Contacts} />
        </Switch>
   </Router>
    </>
  );
}

export default App;