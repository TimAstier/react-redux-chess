import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import s from '../../rootSelectors';
import { Game as GameComponent } from '../../components';

class Game extends React.Component {
  
  render() {
    return (
      <GameComponent { ...this.props } />
    )
  }
}

Game.propTypes = {
  fen: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  activeColor: PropTypes.oneOf(['w', 'b']).isRequired
}

const mapStateToProps = state => ({
  fen: s.game.getFen(state),
  position: s.game.getPosition(state),
  activeColor: s.game.getActiveColor(state)
});

export default connect(
  mapStateToProps
)(Game)
