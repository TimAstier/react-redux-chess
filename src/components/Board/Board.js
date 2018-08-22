import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Square from '../Square/Square';
import getSquareContent from '../../utils/getSquareContent';

const Board = styled.div`
  width: 480px;
  height: 480px;
  border: 3px solid black;
  display: flex;
  flex-wrap: wrap;
`;

const STARTING_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

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

  renderSquares(position) {
    const squares = [];
    let index = 0;
    for (let i = 1; i <= 8; i += 1) {
      for (let j = 1; j <= 8; j += 1) {
        squares.push(
          <Square
            key={index}
            color={this.coordinatesToColor(i, j)}
            content={getSquareContent(position, index)}
          />
        );
        index += 1;
      }
    }
    return squares;
  }

  render() {
    let position = this.props.position
    if (position === '') {
      position = STARTING_POSITION;
    }
    return (
      <Board>
        {this.renderSquares(position)}
      </Board>
    );
  }
}

Component.propTypes = {
  position: PropTypes.string.isRequired
}

Component.defaultProps = {
  position: ''
}

export default Component;
