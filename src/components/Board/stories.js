import React from 'react';
import { storiesOf } from '@storybook/react';
import { INITIAL_POSITION, TEST_POSITION } from '../../constants';
import Provider from '../../utils/testComponents/Provider';

import { Board } from '..';

storiesOf('Board', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('empty', () => <Board />)
  .add('starting position', () =>
    <Board position={INITIAL_POSITION} />)
  .add('test position', () =>
    <Board position={TEST_POSITION} />);
