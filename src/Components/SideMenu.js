import React, { Component } from 'react';
import { Box, Anchor } from 'grommet';
import styled from 'styled-components';
import Container from '../Components/Container';

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
      width: 100%;
      list-style-type: none;
      display: flex;
      justify-content: center;
      padding: 20px 0;
      border-bottom: white 2px solid;
    `;
    return (
      <Container basis="20%" height="100vh" background="accent-3">
        <MenuWrapper>
          <MenuList>
            <Anchor color="accent-5" size="small">
              Attendance
            </Anchor>
          </MenuList>
          <MenuList>
            <Anchor color="accent-5" size="small">
              Leaves
            </Anchor>
          </MenuList>
          <MenuList>
            <Anchor color="accent-5" size="small">
              Early Out
            </Anchor>
          </MenuList>
        </MenuWrapper>
      </Container>
    );
  }
}

export default SideMenu;
