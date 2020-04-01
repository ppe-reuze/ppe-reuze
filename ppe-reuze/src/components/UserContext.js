import React from 'react';
import { Auth } from 'aws-amplify';

const UserContext = React.createContext()

export class UserProvider extends React.Component {
    state = {
        isLoggingIn: true,
        isLoggedIn: false,
        user: null
    }

    constructor(){
        super();
        this.setLoginStatus = this.setLoginStatus.bind(this);
        this.setUser = this.setUser.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
    }

    componentDidMount(){
        this.getCurrentUser();
    }

    getCurrentUser() {
        Auth.currentAuthenticatedUser().then(user => {
            this.setUser(user);
            this.setLoginStatus(true);
            this.setState({ isLoggingIn: false });
        }).catch(err => {
            this.setLoginStatus(false);
            this.setState({ isLoggingIn: false });
        });
    }

    setLoginStatus(status){
        this.setState({
            isLoggedIn: status
        });
    }

    setUser(user){
        this.setState({
            user: user
        });
    }

    render() {
        return (
          <UserContext.Provider
            value={{
              isLoggedIn: this.state.isLoggedIn,
              user: this.state.user,
              setAuthStatus: this.setLoginStatus,
              setUser: this.setUser,
              isLoggingIn: this.state.isLoggingIn
            }}
          >
            {this.props.children}
          </UserContext.Provider>
        )
      }
    }
  
  export const UserConsumer = UserContext.Consumer;
  
  export default UserContext;