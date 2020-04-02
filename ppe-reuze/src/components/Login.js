import React, { Component } from 'react';
import { Authenticator } from 'aws-amplify-react';
import { UserConsumer } from './UserContext';
import { Redirect } from 'react-router-dom';

const signUpConfig = {
    header: 'Sign Up for Healthcare Providers',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Username (public)',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string'
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 2,
        type: 'string'
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 3,
        type: 'password'
      },
      {
        label: 'NPI',
        key: 'custom:npi',
        required: false,
        displayOrder: 4,
        type: 'string'
      },
    ]
  };

class Login extends Component {
    render() {
        return (
            <UserConsumer>
                {({ isLoggedIn, user }) => (
                    <div>
                        {isLoggedIn && user ? (
                            <Redirect to="/start" />
                        ) : (
                                <Authenticator signUpConfig={signUpConfig}>
                                </Authenticator>

                            )}
                    </div>
                )}
            </UserConsumer>
        )
    }
}

export default Login;
