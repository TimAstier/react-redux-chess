import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import s from '../../rootSelectors';
import { Game as GameComponent } from '../../components';

class Game extends React.Component {
  
  render() {
    return (
      <GameComponent
        fen={this.props.fen}
        position={this.props.position}
      />
    )
  }
}

Game.propTypes = {
  fen: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  fen: s.game.getFen(state),
  position: s.game.getPosition(state)
});

export default connect(
  mapStateToProps
)(Game)
