import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import "./App.css";
import Header from './components/Header';
import Particles from 'react-particles-js';
import Aboutme from './components/pages/Aboutme';
import Portfolio from './components/pages/Portfolio';
import Contacts from './components/pages/Contacts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
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
    <Switch>
    <Navbar>
      
     <Route path="/Aboutme" components={Aboutme} />
     <Route path="/Portfolio" components={Portfolio} />
     <Route path="/Contacts" components={Contacts} />

      </Navbar>
    </Switch>
   <Header/>
   </Router>
    </>
  );
}

export default App;