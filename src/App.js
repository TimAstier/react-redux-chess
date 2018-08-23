import React from 'react';
import styled from 'styled-components';

import { Board } from './components';

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
        <Board
          position="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
        />
      </Wrapper>
    );
  }
}

export default App;
