import React, { Component } from 'react';
import * as themes from 'themes';

export default (key) => ComposedComponent =>
  class ThemeComponent extends Component {
    render() {
      const Theme = themes[key];

      return (
        <Theme {...this.props}>
          <ComposedComponent {...this.props} />
        </Theme>
      );
    }
  };
