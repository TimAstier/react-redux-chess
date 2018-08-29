import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Board from '../Board/Board';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

const Wrapper = styled.div`
  display: flex;
`;

class Game extends React.Component {
  
  render() {
    return (
      <Wrapper>
        <LeftSidebar activeColor={this.props.activeColor} />
        <Board
          position={this.props.position}
        />
      </Wrapper>
    )
  }
}

Game.propTypes = {
  fen: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  activeColor: PropTypes.oneOf(['w', 'b']).isRequired
}

export default Game
