import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SQUARE_COORDINATES } from '../../constants';
import ITEM_TYPES from '../../constants/itemTypes';
import { DragSource } from 'react-dnd';

import images from './images';

const Wrapper = styled.div`
  cursor: pointer;
  opacity: ${props => props.isDragging ? 0 : 1};
`;

// DragSource specification
const PieceSource = {
  beginDrag(props) {
    return {};
  },
  endDrag(props, monitor) {
    if (monitor.didDrop()) {
      return props.move(
        SQUARE_COORDINATES[props.squareIndex],
        SQUARE_COORDINATES[monitor.getDropResult().to]
      );
    }
  }
};

// Collecting function
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
    dropResult: monitor.getDropResult()
  }
}

class Piece extends React.Component {
  image(color, type) {
    return images[color + '_' + type];
  }

componentDidMount() {
  // This removes the background-color of img  
  const img = new Image();
  img.src = this.image(this.props.color, this.props.type);
  img.onload = () => this.props.connectDragPreview(img);
}
  
  render() {
    const { isDragging, color, type, connectDragSource }
      = this.props;
    return connectDragSource(
      <div>
        <Wrapper isDragging={isDragging}>
          <img
            src={ this.image(color, type) }
            alt=""
          />
        </Wrapper>
      </div>
    );
  }
}

Piece.propTypes = {
  color: PropTypes.oneOf(['b', 'w']).isRequired,
  type: PropTypes.oneOf(['k', 'q', 'p', 'n', 'b', 'r']).isRequired,
  squareIndex: PropTypes.number.isRequired,
  move: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ITEM_TYPES.PIECE, PieceSource, collect)(Piece);
