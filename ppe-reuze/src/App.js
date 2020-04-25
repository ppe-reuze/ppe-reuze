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
import Home from './components/Home';
import MaskMenu from './components/menus/MaskMenu';
import GloveMenu from './components/menus/GloveMenu';
import Submissions from './components/Submissions';
import Submit from './components/Submit';
import Start from './components/Start';
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
							<Route exact path="/start" component={Start} />
							<Route exact path="/submit" component={Submit} />
							<Route exact path="/masks" component={MaskMenu} />
							<Route exact path="/gloves" component={GloveMenu} />
							<Route exact path="/masks/n95" render={(props) => <Submissions {...props} type={"n95"} />} />
							<Route exact path="/masks/surgical" render={(props) => <Submissions {...props} type={"surgical"} />} />
							<Route exact path="/gloves/latex" render={(props) => <Submissions {...props} type={"latex"} />} />
							<Route exact path="/gloves/nitrile" render={(props) => <Submissions {...props} type={"nitrile"} />} />
							<Route exact path="/gowns" render={(props) => <Submissions {...props} type={"gowns"} />} />
						</Switch>
					</Router>
				</div>
			</UserProvider>
		);
	}
}

App.contextType = UserContext;
export default App;