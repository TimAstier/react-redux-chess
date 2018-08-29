import React from 'react';
import styled from 'styled-components';

import { Game } from '../.';

const Wrapper = styled.div`
  background-color: lightblue;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Game />
      </Wrapper>
    );
  }
}

export default App;
