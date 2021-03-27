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
          <NavBar></NavBar>
      <div>
        <Switch>
          <Route exact path="/" component={Contact}>
            <Contact/>
          </Route>
                <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio>
              <Card/>
            </Portfolio>
          </Route>
                <Route exact path="/about" component={About}>
            <About />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
    </div>
    </>
  );
}

export default App;