import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Square as SquareComponent } from '../../components';
import { POSSIBLE_SQUARE_CONTENTS } from '../../constants';
import { selectors as s } from '../../redux/game';

class Square extends React.Component {
  render() {
    return (
      <SquareComponent legalMoves={[0, 1, 2]} {...this.props} />
    );
  }
}

Square.propTypes = {
  color: PropTypes.oneOf(['black', 'white']).isRequired,
  content: PropTypes.oneOf(POSSIBLE_SQUARE_CONTENTS).isRequired,
  index: PropTypes.number.isRequired,
  legalMoves: PropTypes.array.isRequired
};

// Sharing Selectors Across Multiple Components
// https://redux.js.org/recipes/computingderiveddata#sharing-selectors-across-multiple-components

const makeMapStateToProps = () => {
  const getLegalMoves = s.makeGetLegalMoves()
  const mapStateToProps = (state, props) => {
    return {
      // This is slighlty awkward as we have to pass the 'game' slice of the state
      legalMoves: getLegalMoves(state.get('game'), props)
    }
  }
  return mapStateToProps
}

export default connect(
  makeMapStateToProps
)(Square)
