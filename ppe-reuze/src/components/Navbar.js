import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import UserContext, { UserConsumer } from './UserContext';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isBurgerMenuOpen: false
		}
	}

	static contextType = UserContext;

	logout = async (event) => {
		event.preventDefault();
		const { setUser, setLoginStatus } = this.context;
		try {
			await Auth.signOut();
			setLoginStatus(false);
			setUser(null);
			this.props.history.push("/");
		} catch (error) {
			console.log(error.message);
		}
	}

	toggleBurgerMenu = () => {
		this.setState(prevState => ({ isBurgerMenuOpen: !prevState.isBurgerMenuOpen }));
	}

	render() {
		return (
			<UserConsumer>
				{({ isLoggedIn, user }) => (
					<header className="navbar">
						<div className="container">
							<div className="navbar-brand">
								<Link to="/" className="navbar-item">
									<span className="title">REUZE</span>
								</Link>
								<a role="button" className={`navbar-burger ${this.state.isBurgerMenuOpen ? "is-active" : ""}`} onClick={this.toggleBurgerMenu} aria-label="menu" aria-expanded="false">
									<span aria-hidden="true"></span>
									<span aria-hidden="true"></span>
									<span aria-hidden="true"></span>
								</a>
							</div>
							<div className={`navbar-menu ${this.state.isBurgerMenuOpen ? "is-active" : ""}`}>
								<div className="navbar-end">
									<div className="navbar-item">
										{isLoggedIn && user ? (
											<div>
												<button className="button is-rounded" style={{ marginRight: "0.5em" }}>My Account</button>
												<Link to="/" onClick={this.logout}>
													<button className="button is-rounded is-primary">Log Out</button>
												</Link>
											</div>
										) : (
												<Link to="/login">
													<button className="button is-rounded is-primary">Log In</button>
												</Link>
											)}
									</div>
								</div>
							</div>
						</div>
					</header>
				)}
			</UserConsumer>
		)
	}
}

export default withRouter(Navbar);