import React from 'react';
import { storiesOf } from '@storybook/react';
import DNDProvider from '../../utils/testComponents/DNDProvider';

import { Square } from '..';

storiesOf('Square', module)
  .addDecorator(story => <DNDProvider story={story()} />)
  .add('empty_black', () => <Square color="black" content=" " index={0} />)
  .add('empty_white', () => <Square color="white" content=" " index={0} />)
  .add('white_on_white', () => <Square color="white" content="P" index={0} />)
  .add('black_on_white', () => <Square color="black" content="p" index={0} />)
  .add('white_on_black', () => <Square color="black" content="P" index={0} />)
  .add('black_on_black', () => <Square color="black" content="p" index={0} />);
