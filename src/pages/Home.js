import React, { Component } from 'react';
import { Box, Grommet, Heading } from 'grommet';
import Container from '../Components/Container';
import Layout from '../Layout';

class Home extends Component {
  render() {
    return (
    <Layout>
      <Container>
        <Heading> This is the Home Page </Heading>
      </Container>
    </Layout>
    );
  }
}

export default Home;
