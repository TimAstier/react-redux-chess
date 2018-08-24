import React from 'react';
import PropTypes from 'prop-types';

import Board from '../Board/Board';

class Game extends React.Component {
  
  render() {
    return (
      <Board
        position={this.props.position}
      />
    )
  }
}

Game.propTypes = {
  fen: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

export default Game
