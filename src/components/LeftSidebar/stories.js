import React from 'react';
import { storiesOf } from '@storybook/react';

import LeftSidebar from './LeftSidebar';

storiesOf('LeftSidebar', module)
  .add("activeColor: 'w'", () => <LeftSidebar activeColor="w" />)
  .add("activeColor: 'b'", () => <LeftSidebar activeColor="b" />)
