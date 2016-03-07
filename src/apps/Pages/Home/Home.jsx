import React from 'react';

export default React.createClass({

  displayName: 'Home',

  componentDidMount() {
    window.analytics.page();
  },

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
});
