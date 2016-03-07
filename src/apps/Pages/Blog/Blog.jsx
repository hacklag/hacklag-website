import React from 'react';

export default React.createClass({

  displayName: 'Blog',

  componentDidMount() {
    window.analytics.page();
  },

  render() {
    return (
      <div>
        Blog
      </div>
    );
  }
});
