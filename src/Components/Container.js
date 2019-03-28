import React, { Component } from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';

class Container extends Component {
  render() {
    const Wrapper = styled.section`
      width: 100%;
      background: red;
    `;
    return <Wrapper> {this.props.children} </Wrapper>;
  }
}

export default Container;
