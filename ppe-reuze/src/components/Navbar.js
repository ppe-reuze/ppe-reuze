import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import UserContext, { UserConsumer } from './UserContext';


class Navbar extends React.Component {
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
                                <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div id="navbarMenuHeroC" className="navbar-menu">
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        {isLoggedIn && user ? (
                                            <div>
                                            <button className="button is-rounded" style={{ marginRight: "0.5em" }}>{user.username}'s account</button>
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