import React from 'react';
import Logo from '../common/Logo';
import Grommet from 'grommet';

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

  render() {
    return (
      <Grommet.App>
        <Grommet.Header direction="row" justify="between" large={true} pad={{horizontal: 'medium'}}>
          <Grommet.Title><Logo/></Grommet.Title>
          Navigation bar
        </Grommet.Header>
        <Grommet.Box direction="row" align="center" colorIndex="neutral-1" justify="between" tag="aside">
        <Grommet.Box colorIndex='grey-1' pad='large'>Social Bar</Grommet.Box>
        <Grommet.Box colorIndex='grey-2' pad='large'>Main content</Grommet.Box>
        <Grommet.Box colorIndex='grey-3' pad='large'>Sponsors bar</Grommet.Box>
        </Grommet.Box>
        <Grommet.Footer>
          Footer
        </Grommet.Footer>
      </Grommet.App>
    );
  }
});
