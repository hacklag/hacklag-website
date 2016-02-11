import React from 'react';

export default React.createClass({

  displayName: 'About',

  propTypes: {
    children: React.PropTypes.element.isRequired
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
