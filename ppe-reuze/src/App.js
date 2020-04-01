import React from 'react';
import './App.sass'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Masks from './components/Masks';
import Gloves from './components/Gloves';
import Gowns from './components/Gowns';
import Submissions from './components/Submissions';
import AddSubmission from './components/AddSubmission';
import SelectPPE from './components/SelectPPE';
import Login from './components/Login';

// context
import UserContext, { UserProvider } from './components/UserContext';

Amplify.configure(awsconfig);

class App extends React.Component {

  render() {
    return (
      <UserProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/start" component={SelectPPE} />
              <Route exact path="/masks" component={Masks} />
              <Route exact path="/gloves" component={Gloves} />
              <Route exact path="/gowns" component={Gowns} />
              <Route exact path="/submissions" component={Submissions} />
              <Route exact path="/submissions/:type" component={Submissions} />
              <Route exact path="/addsubmission" component={AddSubmission} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </UserProvider>
    );
  }
}

App.contextType = UserContext;
export default App;