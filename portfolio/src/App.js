import React from "react";
import Card from "./components/Card"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <NavBar>
      <Card/>
    </NavBar>
    <Footer/>
    </div>
  );
}

export default App;
