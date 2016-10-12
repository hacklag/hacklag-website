import { configure, addDecorator } from '@kadira/storybook';
import AppDecorator from './decorator';

addDecorator(AppDecorator);

const stories = require.context('../../src/', true, /\.story\.js$/);

function loadStories() {
  stories.keys().forEach(stories);
}

configure(loadStories, module);
