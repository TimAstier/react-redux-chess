import React from 'react';
import { storiesOf } from '@storybook/react';
import { INITIAL_POSITION, TEST_POSITION } from '../../constants';

import { Board } from '..';

storiesOf('Board', module)
  .add('empty', () => <Board />)
  .add('starting position', () =>
    <Board position={INITIAL_POSITION} />)
  .add('test position', () =>
    <Board position={TEST_POSITION} />);
