import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import styled from 'styled-components';
import { Square } from '../../containers';
import positionToArrayOfPieces from '../../utils/positionToArrayOfPieces';

const Wrapper = styled.div`
  width: 480px;
  height: 480px;
  border: 3px solid black;
  display: flex;
  flex-wrap: wrap;
`;

const EMPTY_BOARD = '8/8/8/8/8/8/8/8';

class Board extends React.Component {
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
    const arrayOfPieces = positionToArrayOfPieces(position);
    for (let i = 1; i <= 8; i += 1) {
      for (let j = 1; j <= 8; j += 1) {
        squares.push(
          <Square
            key={index}
            index={index}
            color={this.coordinatesToColor(i, j)}
            content={arrayOfPieces[index]}
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
      position = EMPTY_BOARD;
    }
    return (
      <Wrapper>
        {this.renderSquares(position)}
      </Wrapper>
    );
  }
}

Board.propTypes = {
  position: PropTypes.string.isRequired
}

Board.defaultProps = {
  position: ''
}

export default DragDropContext(HTML5Backend)(Board);
