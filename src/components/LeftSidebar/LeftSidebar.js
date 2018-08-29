import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActiveColorIndicator from '../ActiveColorIndicator/ActiveColorIndicator';

const Wrapper = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

class LeftSidebar extends React.Component {
  render() {
    return (
      <Wrapper>
        <ActiveColorIndicator
          color="black"
          active={this.props.activeColor === 'b'}
        />
        <ActiveColorIndicator
          color="white"
          active={this.props.activeColor === 'w'}
        />
      </Wrapper>
    );
  }
}

LeftSidebar.propTypes = {
  activeColor: PropTypes.oneOf(['w', 'b']).isRequired
}

export default LeftSidebar
