import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import "./App.css";
import Header from './component/Header';
import Particles from 'react-particles-js';
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
      
     <Route path="/Aboutme" component={Aboutme} />
     <Route path="/Portfolio" component={Portfolio} />
     <Route path="/Contacts" component={Contacts} />

      </Navbar>
    </Switch>
   <Header/>
   </Router>
    </>
  );
}

export default App;