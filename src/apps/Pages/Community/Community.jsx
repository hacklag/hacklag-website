import React from 'react';

export default React.createClass({

  displayName: 'Community',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div>
        Community
        {this.props.children}
      </div>
    );
  }
});
