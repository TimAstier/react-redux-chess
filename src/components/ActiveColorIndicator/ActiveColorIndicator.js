import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;

class ActiveColorIndicator extends React.Component {
  _backGroundColor() {
    if (!this.props.active) {
      return 'transparent';
    }
    return this.props.color;
  }
  
  render() {
    return (
      <Wrapper backgroundColor={this._backGroundColor()} />
    );
  }
}

ActiveColorIndicator.propTypes = {
  color: PropTypes.oneOf(['white', 'black']).isRequired,
  active: PropTypes.bool.isRequired
}

export default ActiveColorIndicator
