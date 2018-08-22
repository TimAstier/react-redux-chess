import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Square = styled.div`
  width: 75px;
  height: 75px;
  background-color: ${props => props.color};
`;

const Component = props => {
  return (
    <Square color={props.color} />
  );
}

Component.propTypes = {
  color: PropTypes.oneOf(['black', 'white']).isRequired,
};

export default Component;
