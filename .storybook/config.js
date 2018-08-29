import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

addDecorator(centered);

function loadStories() {
  require('../src/components/Board/stories')
  require('../src/components/Piece/stories')
  require('../src/components/LeftSidebar/stories')
  require('../src/components/Square/stories')
}

configure(loadStories, module);
