import React from 'react';
import Router from 'react-router-old';


// Stores and Action
export default React.createClass({

  displayName: 'temperature',

  contextTypes: {
    router: React.PropTypes.func
  },

  mixins: [
    Router.State,
    Router.Navigation
  ],

  render() {
    return (
    <div>
      <h2>Temperature Viewer</h2>
      <Router.RouteHandler />
    </div>
    );
  }
});
