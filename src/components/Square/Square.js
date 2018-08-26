import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ITEM_TYPES from '../../constants/itemTypes';
import { DropTarget } from 'react-dnd';
import { Piece } from '../../containers';
import { POSSIBLE_SQUARE_CONTENTS } from '../../constants';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.color === 'black' ? '#BB865E' : '#F3DAB3'};
  border: ${props => props.isOver ? '3px solid black' : 'none'};
`;

const squareTarget = {
  drop(props) {
    return { to: props.index };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const Square = props => {
  const { content, index, connectDropTarget } = props;
  return connectDropTarget(
    <div>
      <Wrapper color={props.color} isOver={props.isOver}>
        {
          content && content !== ' ' &&
            <Piece
              squareIndex={index}
              type={content.toLowerCase()}
              color={content === content.toUpperCase() ? 'w' : 'b'}
            />
        }
      </Wrapper>
    </div>
  );
}

Square.propTypes = {
  color: PropTypes.oneOf(['black', 'white']).isRequired,
  content: PropTypes.oneOf(POSSIBLE_SQUARE_CONTENTS).isRequired,
  index: PropTypes.number.isRequired
};

export default DropTarget(ITEM_TYPES.PIECE, squareTarget, collect)(Square);
