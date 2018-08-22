import React from 'react';
import PropTypes from 'prop-types';

import images from './images';

class Component extends React.Component {
  image(color, type) {
    return images[color + '_' + type];
  }
  
  render() {
    return (
        <img
          src={ this.image(this.props.color, this.props.type) }
          alt=""
        />
    );
  }
}

Component.propTypes = {
  color: PropTypes.oneOf(['b', 'w']).isRequired,
  type: PropTypes.oneOf(['k', 'q', 'p', 'n', 'b', 'r']).isRequired,
};

export default Component;
