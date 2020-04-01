import React from 'react';
import { Auth, Hub } from 'aws-amplify';

const UserContext = React.createContext()


export class UserProvider extends React.Component {
    state = {
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
        Hub.listen('auth', this.authListener);
    }

    authListener = (data) => {
      this.getCurrentUser();
    }

    getCurrentUser() {
        Auth.currentAuthenticatedUser().then(user => {
            this.setUser(user);
            this.setLoginStatus(true);
        }).catch(err => {
            this.setUser(null);
            this.setLoginStatus(false);
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
              setLoginStatus: this.setLoginStatus,
              setUser: this.setUser
            }}
          >
            {this.props.children}
          </UserContext.Provider>
        )
      }
    }
  
  export const UserConsumer = UserContext.Consumer;
  
  export default UserContext;