import React, { Component, PropTypes } from 'react';

export function segment() {
  return function wrapWithSegment(WrappedComponent) {
    class SegmentComponent extends Component {
      static propTypes = {
        pattern: PropTypes.string,
        location: PropTypes.object,
      }

      componentDidMount() {
        window.analytics.page(this.props.pattern || this.props.location.pathname);
      }

      render() {
        return React.createElement((WrappedComponent), {
          ...this.props,
        });
      }
    }

    return SegmentComponent;
  };
}
