import React from 'react';
import { storiesOf } from '@storybook/react';

import { Square } from '..';

storiesOf('Square', module)
  .add('black', () => <Square color="black" />)
  .add('white', () => <Square color="white" />);
