import React from 'react';
import Logo from '../common/Logo';
import Grommet from 'grommet';
import Social from '../apps/Social';

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

  getStyles() {
    return {
      mainView: {
        maxWidth: 1320,
        margin: 'auto'
      },
      socialColumn: {
      },
      mainDiv: {
        color: '#565a5f',
        backgroundColor: '#f5f8f9'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.mainDiv}>
        <Grommet.App style={styles.mainView}>
          <Grommet.Header direction="row" justify="between" large={true} pad={{horizontal: 'medium'}}>
            <Grommet.Title><Logo/></Grommet.Title>
            Navigation bar
          </Grommet.Header>
          <Grommet.Box direction="row" align="center" justify="between" tag="aside">
          <Grommet.Box pad='medium' style={styles.socialColumn}>
            <Social/>
          </Grommet.Box>
          <Grommet.Box colorIndex='grey-2' pad='large'>Main content</Grommet.Box>
          <Grommet.Box colorIndex='grey-3' pad='large'>Sponsors bar</Grommet.Box>
          </Grommet.Box>
          <Grommet.Footer>
            Footer
          </Grommet.Footer>
        </Grommet.App>
      </div>
    );
  }
});
