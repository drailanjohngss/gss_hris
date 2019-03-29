import React from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import SideMenu from '../Components/SideMenu';
import Footer from '../Components/Footer';
import Container from '../Components/Container';

const Layout = ({ children }) => {
  return (
    <Box>
      <Nav />
      <Box direction="row">
        <SideMenu />
        <Container basis="3/4">{children}</Container>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
