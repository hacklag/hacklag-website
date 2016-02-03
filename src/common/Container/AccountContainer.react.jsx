import React from 'react';
import {Link} from 'react-router';

import MUI from 'material-ui';
import Common from '../';


export default React.createClass({

  displayName: 'AccountContainer',

  propTypes: {
    style: React.PropTypes.object
  },

  mixins: [MUI.Utils.Styles],

  getStyles() {
    let styles = {
      marginBottom: 50
    };

    return this.mergeAndPrefix(styles, this.props.style);
  },

  render() {
    let styles = this.getStyles();

    return (
      <div
        className="account-container"
        id={this.props.id}
        style={styles}
        ref={this.props.ref}>
        <div className="account-logo">
          <Link to="login"><Common.Logo className="logo-blue"/></Link>
        </div>
        <MUI.Paper
          className="account-container__content"
          rounded={false}>
          {this.props.children}
        </MUI.Paper>
        {this.props.bottomContent}
      </div>
    );
  }
});
