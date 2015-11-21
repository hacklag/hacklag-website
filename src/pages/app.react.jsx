import React from 'react';
import Router from 'react-router-old';

export default React.createClass({

  displayName: 'App',

  contextTypes: {
    router: React.PropTypes.func
  },


  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  mixins: [
    Router.State
  ],

  render() {
    return (
      <div>
        Here you can put your header!
        <Router.RouteHandler/>
      </div>
    );
  }
});
