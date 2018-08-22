import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

addDecorator(centered);

function loadStories() {
  require('../src/components/Square/stories')
  require('../src/components/Board/stories')
}

configure(loadStories, module);
