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
          window.ga('send', {
            hitType: 'pageview',
            page: `404${location.pathname}`,
          });

          window.ga('send', {
            hitType: 'event',
            eventCategory: 'ErrorPage',
            eventAction: `404${location.pathname}`,
            eventLabel: 'Route',
          });
        } else {
          window.ga('send', {
            hitType: 'pageview',
            page: location.pathname,
          });

          window.ga('send', {
            hitType: 'event',
            eventCategory: 'Page',
            eventAction: location.pathname,
            eventLabel: 'Route',
          });
        }
        window.fbq('track', 'PageView');
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
