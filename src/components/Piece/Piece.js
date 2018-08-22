import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import images from './images';

const Piece = styled.div`
  width: 75px;
  height: 75px;
`;

class Component extends React.Component {
  image(color, type) {
    return images[color + '_' + type];
  }
  
  render() {
    return (
      <Piece>
        <img
          src={ this.image(this.props.color, this.props.type) }
          alt=""
        />
      </Piece>
    );
  }
}

Component.propTypes = {
  color: PropTypes.oneOf(['black', 'white']).isRequired,
  type: PropTypes.oneOf(
    ['king', 'queen', 'pawn', 'knight', 'bishop', 'rook']
  ).isRequired,
};

export default Component;
