import React from 'react';

export default React.createClass({

  displayName: 'Events',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div>
        Events
        {this.props.children}
      </div>
    );
  }
});
