import React, { Component, PropTypes } from 'react';
import * as utils from 'utils';
import hoistStatics from 'hoist-non-react-statics';

export function connect(ComposedComponent, decorators = {}) {
  class Connect extends Component {
    static propTypes = {
      services: PropTypes.object,
      store: PropTypes.object,
      router: PropTypes.object,
    }

    static contextTypes = {
      services: PropTypes.object,
      store: PropTypes.object,
    }

    constructor(props, context) {
      super(props, context);

      this.services = props.services || context.services;
      this.store = props.store || context.store;
      this.router = context.router;
    }

    render() {
      return React.createElement(utils.observer(ComposedComponent), {
        ...this.props,
        store: this.store,
        services: this.services,
        router: this.router,
      });
    }
  }

  let WrappedComponent = hoistStatics(Connect, ComposedComponent);

  Object.keys(decorators).forEach(decoratorName => {
    const decoratorParams = decorators[decoratorName];
    const decorator = utils[decoratorName];

    if (typeof decorator === 'function') {
      WrappedComponent = decorator(decoratorParams)(WrappedComponent);
    }
  });

  return WrappedComponent;
}
