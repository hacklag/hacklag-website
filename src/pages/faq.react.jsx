import React from 'react';
import {History, RouteHandler} from 'react-router';

export default React.createClass({

  displayName: 'FAQ',

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
        FAQ
      </div>
    );
  }
});
