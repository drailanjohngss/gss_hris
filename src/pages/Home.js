import React, { Component } from 'react';
import { Box, Grommet, Heading, Clock, Button } from 'grommet';
import Layout from '../Layout';
import Container from '../Components/shared-components/Container';
import styled from 'styled-components';
import * as moment from 'moment';

class Home extends Component {
  render() {
    const Time = styled(Clock)``;
    const today = moment().format('LLLL');
    return (
      <Layout>
        <Heading level="3"> Time-in / Time Out </Heading>
        <Container justify="center" alignContent="center" size="large">
          <Time type="digital" alignSelf="center" size="xxlarge" />
          <Heading alignSelf="center" level="4">
            {today}
          </Heading>
          <Box direction="row" justify="center" pad="medium">
            <Button
              color="accent-1"
              margin="small"
              label="Time-in"
              onClick={() => {}}
            />
            <Button
              disabled
              color="accent-3"
              margin="small"
              label="Time-Out"
              onClick={() => {}}
            />
          </Box>
        </Container>
      </Layout>
    );
  }
}

export default Home;
