import React from 'react';
import {IconButton} from 'material-ui';

export default React.createClass({
  displayName: 'Header',

  getStyles() {
    return {
      headerDiv: {
        justifyContent: 'flex-end',
        display: 'flex'
      },
      iconStyle: {
        fontSize: 42,
        color: 'black'
      },
      buttonStyle: {
        margin: 22,
        padding: 0
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
          iconClassName='icon-github'
          iconStyle={styles.iconStyle}
          style={styles.buttonStyle}
          href="https://github.com/hacklag/"/>
      </div>
    );
  }
});
