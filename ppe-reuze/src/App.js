import React from 'react';
import './App.sass';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SelectPPE from './components/SelectPPE';

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
                <Route path="/">
                  <SelectPPE />
                </Route>
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
