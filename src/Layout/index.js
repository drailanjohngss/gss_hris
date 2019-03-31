import React from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import SideMenu from '../Components/SideMenu';
import Footer from '../Components/Footer';
import Container from '../Components/shared-components/Container';

const Layout = ({ children }) => {
  return (
    <Box>
      <Nav />
      <Box direction="row">
        <SideMenu />
        <Container pad={{ left: '10px' }} basis="75%">
          {children}
        </Container>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
