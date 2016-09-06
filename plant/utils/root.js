import React, { Component, PropTypes } from 'react';
import hoistStatics from 'hoist-non-react-statics';

export function configureRoots(roots) {
  // Roots argument is a list of root classes
  // Map through each class and construct it.
  const compiledRoots = Object
    .keys(roots)
    .reduce((result, rootName) => ({
      ...result,
      [rootName]: new roots[rootName],
    }), {});

  // Allow commponents to comunicate with each other via static 'roots' var.
  Object
    .keys(roots)
    .forEach(rootName => {
      compiledRoots[rootName].roots = compiledRoots;
    });

  return compiledRoots;
}

export function connect(...mapRootsToProps) {
  return function wrapWithConnect(ComposedComponent) {
    class Connect extends Component {
      static propTypes = {
        roots: PropTypes.object,
      }

      static contextTypes = {
        roots: PropTypes.object,
      }

      constructor(props, context) {
        super(props, context);
        this.roots = props.roots || context.roots;
      }

      render() {
        let filteredRoots;

        // Handle: @connect(({ uiRoot, userRoot }) => ({}))
        if (typeof mapRootsToProps[0] === 'function') {
          filteredRoots = mapRootsToProps[0](this.roots);
        } else {
          // Handle: @connect('uiRoot', 'userRoot')
          filteredRoots = Object.keys(this.roots)
            .filter(key => mapRootsToProps.indexOf(key) >= 0)
            .reduce((obj, key) => ({
              ...obj,
              [key]: this.roots[key],
            }), {});
        }

        return <ComposedComponent {...this.props} {...filteredRoots} />;
      }
    }

    return hoistStatics(Connect, ComposedComponent);
  };
}
