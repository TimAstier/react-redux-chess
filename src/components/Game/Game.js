import React from 'react';

import Board from '../Board/Board';

const STARTING_POSITION =
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

class Game extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fen: STARTING_POSITION
    }
  }
  
  position() {
    return this.state.fen.split(' ')[0];
  }
  
  render() {
    return (
      <Board
        position={this.position()}
      />
    )
  }
}

export default Game
