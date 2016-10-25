import React, { Component, PropTypes } from 'react';

export function tracker() {
  return function wrapWithTracker(WrappedComponent) {
    class TrackerComponent extends Component {
      static propTypes = {
        pattern: PropTypes.string,
        location: PropTypes.object,
      }

      componentDidMount() {
        if (!this.props.pattern) {
          window.ga('send', 'pageview', `404${location.pathname}`);
        } else {
          window.ga('send', 'pageview');
        }
      }

      render() {
        return React.createElement((WrappedComponent), {
          ...this.props,
        });
      }
    }

    return TrackerComponent;
  };
}
