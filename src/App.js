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
  
    <Router>
          <NavBar>
        <Switch>
          <Route>
            <Link to ="/">
            <Contact/>
            </Link>
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
      </NavBar>
      <Footer/>
    </Router>

    </>
  );
}

export default App;