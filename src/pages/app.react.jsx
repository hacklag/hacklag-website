import React from 'react';

import {History} from 'react-router';

export default React.createClass({

  displayName: 'App',

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
        <div>Hello world!</div>
        {this.props.children}
      </div>
    );
  }
});
