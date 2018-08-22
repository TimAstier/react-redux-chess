import React from 'react';
import { storiesOf } from '@storybook/react';

import { Board } from '..';

storiesOf('Board', module)
  .add('starting position', () => <Board />)
  .add('specific position', () =>
    <Board position="3r2k1/p6p/7b/8/N1Pp4/P2K1p2/4r3/R2R4 " />);
