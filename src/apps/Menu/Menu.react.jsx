import React from 'react';
import Grommet from 'grommet';
import Radium from 'radium';

export default Radium(React.createClass({
  displayName: 'Menu',

  getStyles() {
    return {
      menuText: {
        color: '#565A5F',
        whiteSpace: 'nowrap',
        WebkitTransition: '0.2s ease',
        textDecoration: 'none',
        ':hover': {
          color: '#38B7EA',
          textDecoration: 'none'
        }
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <Grommet.Menu direction="row" size="large" dropAlign={{right: 'right'}}>
        <Grommet.Anchor href="#" tag="div">
          <span key="home" style={styles.menuText}>Home</span>
        </Grommet.Anchor>
        <Grommet.Anchor href="#">
          <span key="events" style={styles.menuText}>Events</span>
        </Grommet.Anchor>
        <Grommet.Anchor href="#">
          <span key="blog" style={styles.menuText}>Blog</span>
        </Grommet.Anchor>
        <Grommet.Anchor href="#">
          <span key="gallery" style={styles.menuText}>Gallery</span>
        </Grommet.Anchor>
        <Grommet.Anchor href="#">
          <span key="community" style={styles.menuText}>Community</span>
        </Grommet.Anchor>
        <Grommet.Anchor href="#">
          <span key="partners" style={styles.menuText}>Partners</span>
        </Grommet.Anchor>
        <Grommet.Anchor href="#">
          <span key="about" style={styles.menuText}>About</span>
        </Grommet.Anchor>
      </Grommet.Menu>
    );
  }
}));
