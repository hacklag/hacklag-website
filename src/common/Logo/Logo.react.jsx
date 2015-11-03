import React from 'react';
import Isvg from 'react-inlinesvg';

import './Logo.sass';

export default React.createClass({

  displayName: 'Logo',

  render() {
    return (
      <Isvg
        wrapper={React.DOM.div}
        wrapperStyle={this.props.style}
        src="/img/logo.svg"
        className={this.props.className}
        />
    );
  }
});
