import React from 'react';

export default React.createClass({

  displayName: 'Partners',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div>
        Partners
        {this.props.children}
      </div>
    );
  }
});
