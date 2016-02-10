import React from 'react';
import {History, RouteHandler} from 'react-router';

export default React.createClass({

  displayName: 'Donate',

  contextTypes: {
    router: React.PropTypes.func
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  mixins: [History],

  render() {
    return (
      <div>
        Donate
      </div>
    );
  }
});
