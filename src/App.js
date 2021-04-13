import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import "./App.css";
import Header from './components/Header';
import Particles from 'react-particles-js';
function App() {
  return (
    <>
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
          type:"circle",
          stroke:{
            width: 6,
            color:"#f9ab00"
          }
        }
      }
    }}
    />
   <Navbar/>
   <Header/>
   </>
  );
}

export default App;