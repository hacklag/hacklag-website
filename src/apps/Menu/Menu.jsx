import React from 'react';
import Radium from 'radium';
import {Grid, Row, Col} from 'react-flexbox-grid';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconButton from 'material-ui/lib/icon-button';
import {Link} from 'react-router';

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

  handleClick() {
    this.setState({toggle: !this.state.toggle});
  },

  render() {
    const styles = this.getStyles();
    const menuItemStyle = this.state.toggle ? styles.menuItemSlideDown : styles.menuItem;
    const RadiumLink = Radium(Link);

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
                style={menuItemStyle}>
                  <RadiumLink
                    to="home"
                    key="home"
                    style={styles.menuText}>
                      Home
                  </RadiumLink>
              </Col>
              <Col
                xs={12}
                sm={2}
                md={1}
                style={menuItemStyle}>
                  <RadiumLink
                    to="events"
                    key="events"
                    style={styles.menuText}>
                      Events
                    </RadiumLink>
              </Col>
              <Col
                xs={12}
                sm={2}
                md={1}
                style={menuItemStyle}>
                  <RadiumLink
                    to="blog"
                    key="blog"
                    style={styles.menuText}>
                      Blog
                    </RadiumLink>
              </Col>
              <Col
                xs={12}
                sm={2}
                md={1}
                style={menuItemStyle}>
                  <RadiumLink
                    to="about"
                    key="about"
                    style={styles.menuText}>
                      About
                    </RadiumLink>
              </Col>
            </Row>
          </Grid>
        </div>
        <div
          key="toggle"
          style={styles.toggle}
          onClick={this.handleClick}>
            <IconButton>
              <NavigationMenu />
            </IconButton>
        </div>
      </div>
    );
  }
}));
