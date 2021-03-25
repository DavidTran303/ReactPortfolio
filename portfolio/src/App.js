import React from "react";
import Card from "./components/Card"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio"

function App() {
  return (
    <div>
    <NavBar>
      <About/>
      <Contact/>
      <Portfolio>
        <Card/>
      </Portfolio>
    </NavBar>
    <Footer/>
    </div>
  );
}

export default App;
