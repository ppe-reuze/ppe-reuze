import React from 'react';
import './App.sass';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AnimatedSwitch } from 'react-router-transition';


// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Masks from './components/Masks';
import Gloves from './components/Gloves';
import Gowns from './components/Gowns';
import Goggles from './components/Goggles';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <section className="hero is-info is-fullheight">
              <div className="hero-head">
                <Navbar />
              </div>
              <div className="hero-body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/masks" component={Masks} />
                <Route exact path="/gloves" component={Gloves} />
                <Route exact path="/gowns" component={Gowns} />
                <Route exact path="/goggles" component={Goggles} />
              </Switch>
              </div>
              <div className="hero-foot">
                <Footer />
              </div>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
