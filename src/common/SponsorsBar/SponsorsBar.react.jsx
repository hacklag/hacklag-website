import React from 'react';
import {RaisedButton} from 'material-ui';
import SponsorsBarListRender from './SponsorsBarListRender.react';
import {Link} from 'react-router';
import Radium from 'radium';

export default Radium(React.createClass({
  displayName: 'SponsorsBar',

  getStyles() {
    return {
      componentBody: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#565a5f',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        '@media (min-width: 48em)': {
          marginRight: 24,
          marginLeft: 24
        }
      },
      partnerBox: {
        padding: '16px 16px 16px 8px',
        borderBottom: '1px solid #eceff2'
      },
      partnerBoxTop: {
        padding: 8,
        borderTop: '1px solid #eceff2'
      },
      partnersText: {
        fontWeight: 600,
        fontSize: 24
      },
      partnersDesc: {
        display: 'block',
        fontSize: 14
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        <div style={styles.partnerBox}>
          <div style={styles.partnersText}>Partners</div>
          <div style={styles.partnersDesc}>Developers connector</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <SponsorsBarListRender
            list={[
              ['http://hacklag.org/', 'logo.jpg'],
              ['http://hacklag.org/', 'logo.jpg'],
              ['http://hacklag.org/', 'logo.jpg'],
              ['http://hacklag.org/', 'logo.jpg']
            ]}/>
        </div>
        <div style={styles.partnerBoxTop}>
          <RaisedButton
            label="See all sponsors"
            linkButton={true}
            href="#/partners"
            secondary={true}
          />
        </div>
      </div>
    );
  }
}));
