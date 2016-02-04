import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({

  displayName: 'LoadingContainer',

  getStyles() {
    return {
      container: {
        margin: '96px auto'
      },
      withSidebar: {
        marginLeft: 300
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={[
        styles.container,
        this.props.withSidebar === true && styles.withSidebar]}>
        {this.props.children}
      </div>
    );
  }
}));
