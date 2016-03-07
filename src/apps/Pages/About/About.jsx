import React from 'react';

export default React.createClass({

  displayName: 'About',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  componentDidMount() {
    window.analytics.page();
  },

  render() {
    return (
      <div>
        About
        {this.props.children}
      </div>
    );
  }
});
