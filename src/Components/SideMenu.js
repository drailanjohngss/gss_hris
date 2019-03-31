import React, { Component } from 'react';
import { Box, Anchor, Text } from 'grommet';
import styled from 'styled-components';
import Container from '../Components/shared-components/Container';
import { Calendar } from 'grommet-icons';

class SideMenu extends Component {
  render() {
    const MenuWrapper = styled.div`
      width: 100%;
      text-decoration: none;
      display: flex;
      justify-content: center;
      flex-direction: column;
    `;

    const MenuList = styled.div`
      list-style-type: none;
      display: flex;
      justify-content: start;
      padding: 20px 0;
      margin-left: 20px;
      border-bottom: white 2px solid;
    `;
    return (
      <Container
        basis="20%"
        height="100vh"
        border={{ side: 'right', color: 'accent-3', style: 'solid' }}
      >
        <MenuWrapper>
          <MenuList>
            <Anchor color="accent-5" size="large">
              <Box alignSelf="center" direction="row">
                <Calendar color="brand" />
                <Text margin={{ left: '20px' }}> Attendance </Text>
              </Box>
            </Anchor>
          </MenuList>
          <MenuList>
            <Anchor color="accent-5" size="large">
              <Box alignSelf="center" direction="row">
                <Calendar color="brand" />
                <Text margin={{ left: '20px' }}> Leaves </Text>
              </Box>
            </Anchor>
          </MenuList>
          <MenuList>
            <Anchor color="accent-5" size="large">
              <Box alignSelf="center" direction="row">
                <Calendar color="brand" />
                <Text margin={{ left: '20px' }}> Early Out </Text>
              </Box>
            </Anchor>
          </MenuList>
        </MenuWrapper>
      </Container>
    );
  }
}

export default SideMenu;
