import React from 'react';
import Header from '../apps/Header';
import Grommet from 'grommet';
import Social from '../apps/Social';
import Footer from '../apps/Footer';
import SponsorsBar from '../common/SponsorsBar';

import {History, State, RouteHandler} from 'react-router';


export default React.createClass({

  displayName: 'App',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  mixins: [
    History,
    State
  ],

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
        <div style={styles.mainView}>
          <Header/>
          <Grommet.Box direction="row" align="center" justify="between" tag="aside">
          <Grommet.Box pad='medium' style={styles.socialColumn}>
            <Social/>
          </Grommet.Box>
          <Grommet.Box colorIndex='grey-2' pad='large'>
            {this.props.children}
          </Grommet.Box>
          <Grommet.Box pad='medium'>
            <SponsorsBar/>
          </Grommet.Box>
          </Grommet.Box>
            <Footer/>
        </div>
      </div>
    );
  }
});
