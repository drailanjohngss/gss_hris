import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
import styled from 'styled-components';
import Container from '../Components/Container';

class Nav extends Component {
  render() {
    const Nav = styled.ul`
      text-decoration: none;
    `;

    const NavItems = styled.li`
      display: inline;
      padding-right: 10px;
    `;
    return (
      <Container
        background="#7D4CDB"
        direction="row"
        justify="between"
        pad={{ horizontal: 'large' }}
        width="100%"
        alignContent="center"
      >
        <Box alignContent="center" alignSelf="center">
          <Heading level="3"> GSS HRIS </Heading>
        </Box>
        <Box alignSelf="center">
          <Nav>
            <NavItems>Profile</NavItems>
            <NavItems>Logout</NavItems>
          </Nav>
        </Box>
      </Container>
    );
  }
}

export default Nav;
