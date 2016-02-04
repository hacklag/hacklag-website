import React from 'react';
import {Router, Route} from 'react-router';

// Stores and Action
import SessionStore from '../apps/Session/SessionStore';
import AuthConstants from '../apps/Account/AuthConstants';


/* eslint-disable no-process-env */

let ENV = process.env.NODE_ENV || 'development';

/* eslint-enable */

export default React.createClass({

  displayName: 'Dashboard',

  render() {
    return (
      <div>
        Header
        {this.props.children}
      </div>
    );
  }

});
