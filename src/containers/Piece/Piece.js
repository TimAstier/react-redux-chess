import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions } from '../../redux/game';
import { Piece as PieceComponent } from '../../components';

class Piece extends React.Component {
  
  render() {
    return (
      <PieceComponent { ...this.props } />
    );
  }
}

Piece.propTypes = {
  color: PropTypes.oneOf(['b', 'w']).isRequired,
  type: PropTypes.oneOf(['k', 'q', 'p', 'n', 'b', 'r']).isRequired,
  squareIndex: PropTypes.number.isRequired,
  move: PropTypes.func.isRequired,
  legalMoves: PropTypes.array.isRequired
};

export default connect(
  null,
  {
    move: actions.move
  }
)(Piece);
