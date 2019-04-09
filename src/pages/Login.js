import React, { Component } from 'react';
import { Box, Grommet, Heading } from 'grommet';
import Layout from '../Layout';
import { FirebaseContext } from '../Components/Firebase';

class Login extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          return <Heading> This is the Login Page </Heading>;
        }}
      </FirebaseContext.Consumer>
    );
  }
}

export default Login;
