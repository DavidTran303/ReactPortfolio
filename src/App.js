import React from "react";
import Card from "./components/Card"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
      <div>
        <NavBar>
            <Link to="/">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
        </NavBar>
        
        <Switch>
          <Route exact path="/">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;