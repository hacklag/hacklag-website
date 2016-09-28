import React, { Component, PropTypes } from 'react';

export default WrappedComponent =>
  class SegmentComponent extends Component {
    static propTypes={
      route: PropTypes.object,
    }
    componentDidMount() {
      window.analytics.page(this.props.route.name || this.props.route.path);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
