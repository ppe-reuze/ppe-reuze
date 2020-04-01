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
        }catch(error) {
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
                                <Link to="/">
                                    <a className="navbar-item">
                                        <i class="fas fa-head-side-mask fa-lg"></i>&nbsp;<span className="title">REUZE</span>
                                    </a>
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
                                            <Link to="/" onClick={this.logout}>
                                                <button className="button is-rounded is-info">Log Out</button>
                                            </Link>
                                        ) : (
                                                <div>
                                                    <Link to="/login">
                                                        <button className="button is-rounded is-info">Log In</button>
                                                    </Link>
                                                    &nbsp;
                                                    <button className="button is-rounded is-primary">Sign Up</button>
                                                </div>
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