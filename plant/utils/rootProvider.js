import { Component, PropTypes, Children } from 'react';

export default class RootProvider extends Component {
  static propTypes = {
    roots: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  }

  static childContextTypes = {
    roots: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.roots = props.roots;
  }

  getChildContext() {
    return { roots: this.roots };
  }

  render() {
    return Children.only(this.props.children);
  }
}
