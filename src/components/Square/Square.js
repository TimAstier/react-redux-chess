import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Piece from '../Piece/Piece';

const Wrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.color === 'black' ? '#BB865E' : '#F3DAB3'};
`;

const ALLOWED_CONTENTS = [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r', 'p',
'P', 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R', ' '];

const Square = props => {
  const { content } = props;
  return (
    <Wrapper color={props.color}>
      {
        content && content !== ' ' &&
          <Piece
            type={content.toLowerCase()}
            color={content === content.toUpperCase() ? 'w' : 'b'}
          />
      }
    </Wrapper>
  );
}

Square.propTypes = {
  color: PropTypes.oneOf(['black', 'white']).isRequired,
  content: PropTypes.oneOf(ALLOWED_CONTENTS).isRequired
};

export default Square;
