import { configureNodes } from 'utils';

// Create object with basic routes that simply map path to node
const basicNodes = {
  '/': System.import('./Landing'),
  '/sponsors': System.import('./Sponsors'),
  about: System.import('./About'),
  '*': System.import('./NotFound'),
};

// Here you can define custom routes that require additional setup.
// Routing is based on react-router, so example entry would look like this:
//   {
//     path: 'contact',
//     component: About,
//     onEnter: () => {},
//   },
const advancedNodes = [];

export default {
  childRoutes: configureNodes(basicNodes, advancedNodes),
};
