import React from 'react';
import Radium from 'radium';
import {IconButton} from 'material-ui';

export default Radium(React.createClass({
  displayName: 'Header',

  getStyles() {
    return {
      headerDiv: {
        justifyContent: 'flex-end',
        display: 'flex'
      },
      iconStyler: {
        width: 64,
        height: 64,
        margin: 22
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.headerDiv}>
        <IconButton
          tooltip="Hacklag GitHub"
          tooltipPosition="bottom-center"
          linkButton={true}
          style={styles.iconStyler}
          href="https://github.com/hacklag/">
          <img src={"/img/social/github.svg"}
            alt="GitHub"/>
        </IconButton>
      </div>
    );
  }
}));
