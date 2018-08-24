import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import s from '../../rootSelectors';
import { Game as GameComponent } from '../../components';

class Game extends React.Component {

  position() {
    return this.props.fen.split(' ')[0];
  }
  
  render() {
    return (
      <GameComponent
        fen={this.props.fen}
        position={this.position()}
      />
    )
  }
}

Game.propTypes = {
  fen: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  fen: s.game.getFen(state)
});

export default connect(
  mapStateToProps
)(Game)
