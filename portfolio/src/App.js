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
    <>
    <div>
    <Router>
      <NavBar>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Contact/>
          </Route>
          <Route path="/portfolio">
            <Portfolio>
              <Card/>
            </Portfolio>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
        </NavBar>
      <Footer/>
    </Router>
    </div>
    </>
  );
function Contact() {
  return <h2>Contact</h2>;
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

function About() {
  return <h2>About</h2>;
}
}

export default App;
