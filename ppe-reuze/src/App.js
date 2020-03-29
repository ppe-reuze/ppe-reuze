import React from 'react';
import './App.sass';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SelectPPE from './components/SelectPPE';

function App() {
  return (
    <div className="App">
      <section className="hero is-info is-fullheight">

        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
          <SelectPPE />
        </div>

        <div className="hero-foot">
          <Footer />
        </div>

      </section>
    </div>
  );
}

export default App;
