import React from 'react';
import Radium from 'radium';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ActionHome from 'material-ui/lib/svg-icons/navigation/menu';
import IconButton from 'material-ui/lib/icon-button';

export default Radium(React.createClass({
  displayName: 'Menu',

  getInitialState() {
    return {
      toggle: false
    };
  },

  getStyles() {
    return {
      menuText: {
        color: '#565A5F',
        whiteSpace: 'nowrap',
        transition: '0.2s ease',
        textDecoration: 'none',
        ':hover': {
          color: '#38B7EA',
          textDecoration: 'none'
        }
      },
      menu: {
        '@media (max-width: 48em)': {
          overflow: 'hidden',
          maxHeight: 0,
          position: 'absolute',
          top: 75,
          left: 0,
          width: '100%',
          backgroundColor: '#FFFFFF',
          transition: '0.1s ease'
        }
      },
      menuSlideDown: {
        overflow: 'hidden',
        maxHeight: 1000,
        position: 'absolute',
        top: 75,
        left: 0,
        backgroundColor: '#FFFFFF',
        width: '100%',
        transition: '0.5s ease'
      },
      toggle: {
        display: 'none',
        '@media (max-width: 48em)': {
          display: 'block'
        }
      },
      menuItem: {
        textAlign: 'center',
        transition: '0.3s ease'
      },
      menuItemSlideDown: {
        textAlign: 'center',
        marginBottom: 8,
        marginTop: 8
      }
    };
  },

  handleClick(event) {
    this.setState({toggle: !this.state.toggle});
  },

  render() {
    let styles = this.getStyles();

    return (
      <div>
        <div
          key="menu"
          style={this.state.toggle ? styles.menuSlideDown : styles.menu}>
          <Grid>
            <Row
              end={'sm'}
              start={'xs'}>
              <Col
                xs={12}
                sm={2}
                md={1}
                style={this.state.toggle ? styles.menuItemSlideDown : styles.menuItem}>
                  <a
                    href="/#/home"
                    key="home"
                    style={styles.menuText}>
                      Home
                  </a>
              </Col>
              <Col
                xs={12}
                sm={2}
                md={1}
                style={this.state.toggle ? styles.menuItemSlideDown : styles.menuItem}>
                  <a
                    href="/#/events"
                    key="events"
                    style={styles.menuText}>
                      Events
                    </a>
              </Col>
              <Col
                xs={12}
                sm={2}
                md={1}
                style={this.state.toggle ? styles.menuItemSlideDown : styles.menuItem}>
                  <a
                    href="/#/blog"
                    key="blog"
                    style={styles.menuText}>
                      Blog
                    </a>
              </Col>
              <Col
                xs={12}
                sm={2}
                md={1}
                style={this.state.toggle ? styles.menuItemSlideDown : styles.menuItem}>
                  <a
                    href="/#/about"
                    key="about"
                    style={styles.menuText}>
                      About
                    </a>
              </Col>
            </Row>
          </Grid>
        </div>
        <div
          key="toggle"
          style={styles.toggle}
          onClick={this.handleClick}>
            <IconButton>
              <ActionHome />
            </IconButton>
        </div>
      </div>
    );
  }
}));
