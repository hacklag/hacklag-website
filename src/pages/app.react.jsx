import React from 'react';

import {History} from 'react-router';

// Stores and Action
import SessionStore from '../apps/Session/SessionStore';
import AuthConstants from '../apps/Account/AuthConstants';


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
