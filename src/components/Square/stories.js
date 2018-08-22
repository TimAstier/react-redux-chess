import React from 'react';
import { storiesOf } from '@storybook/react';

import { Square } from '..';

storiesOf('Square', module)
  .add('empty_black', () => <Square color="black" content="" />)
  .add('empty_white', () => <Square color="white" content="" />)
  .add('white_on_white', () => <Square color="white" content="P" />)
  .add('black_on_white', () => <Square color="black" content="p" />)
  .add('white_on_black', () => <Square color="black" content="P" />)
  .add('black_on_black', () => <Square color="black" content="p" />);
