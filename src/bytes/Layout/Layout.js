import { PropTypes, createElement } from 'react';
import * as layouts from './index';

const Layout = ({ name, children }) => {
  const layout = layouts[name];

  if (!layout) {
    throw new Error(`Layout with given name: "${name}", was not found.`);
  }

  return createElement(layout, { children });
};

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Layout;
