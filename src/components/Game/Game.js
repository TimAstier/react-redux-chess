import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Board from '../Board/Board';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 200px;
`;

const RightWrapper = styled.div`
  width: 200px;
`;

class Game extends React.Component {
  
  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <LeftSidebar activeColor={this.props.activeColor} />
        </LeftWrapper>
        <Board
          position={this.props.position}
        />
        <RightWrapper />
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
