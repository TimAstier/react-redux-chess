import React from 'react';
import styled from 'styled-components';
import Square from '../Square/Square';

const Board = styled.div`
  width: 600px;
  height: 600px;
  border: 3px solid black;
  display: flex;
  flex-wrap: wrap;
`;

class Component extends React.Component {
  coordinatesToColor = (i, j) => {
    let color = '';
    if (i % 2 === 0) {
      color = j % 2 === 1 ? 'black' : 'white';
    } else {
      color = j % 2 === 0 ? 'black' : 'white';
    }
    return color;
  }

  renderSquares() {
    const squares = [];
    let index = 0;
    for (let i = 1; i <= 8; i += 1) {
      for (let j = 1; j <= 8; j += 1) {
        index += 1;
        squares.push(
          <Square key={index} color={this.coordinatesToColor(i, j)} />,
        );
      }
    }
    return squares;
  }

  render() {
    return (
      <Board>
        {this.renderSquares()}
      </Board>
    );
  }
}

export default Component;
