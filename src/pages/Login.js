import React, { Component } from 'react';
import {
  Box,
  Grommet,
  Heading,
  Form,
  FormField,
  Button,
  TextInput
} from 'grommet';
import Layout from '../Layout';

class Login extends Component {
  render() {
    return (
      <Box height="100vh" justify="center">
        <Box
          width="large"
          alignSelf="center"
          align="center"
          border={{ color: 'brand', size: 'medium' }}
        >
          <Form>
            <FormField name="email" label="Email">
              <TextInput placeholder="email" type="email" />
            </FormField>
            <FormField name="password" label="Password">
              <TextInput type="password" />
            </FormField>
            <Button type="submit" primary label="Submit" />
          </Form>
        </Box>
      </Box>
    );
  }
}

export default Login;
