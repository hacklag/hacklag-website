import { Component, PropTypes, Children } from 'react';

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    services: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  }

  static childContextTypes = {
    services: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    const { store, services } = this.props;

    this.store = store;
    this.services = Object
      .keys(services)
      .reduce((initializedServices, serviceName) => ({
        ...initializedServices,
        [serviceName]: new services[serviceName],
      }), {});

    Object
      .keys(services)
      .forEach(actionName => {
        this.services[actionName].store = this.store;
        this.services[actionName].services = this.services;
      });
  }

  getChildContext() {
    return {
      services: this.services,
      store: this.store,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
