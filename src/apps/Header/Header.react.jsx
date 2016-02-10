import React from 'react';
import Logo from '../../common/Logo';
import Grommet from 'grommet';
import Menu from '../Menu';

export default React.createClass({
  displayName: 'Header',

  getStyles() {
    return {
      navbar: {
        backgroundColor: '#FFFFFF',
        margin: '0 -9999rem',
        padding: '0.25rem 9999rem',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.navbar}>
        <Grommet.Header
          direction="row"
          justify="between"
          large={true}
          pad={{horizontal: 'medium'}}
        >
          <Grommet.Title><Logo/></Grommet.Title>
        <Menu/>
        </Grommet.Header>
      </div>
    );
  }
});
