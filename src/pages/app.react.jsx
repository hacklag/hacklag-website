import React from 'react';
import Header from '../apps/Header';
import Grommet from 'grommet';
import Social from '../apps/Social';
import Footer from '../apps/Footer';
import SponsorsBar from '../common/SponsorsBar';
import MainContainer from '../common/MainContainer';

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
      },
      MainContainer: {
        display: 'flex',
        width: '54%',
        marginTop: 24
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.mainDiv}>
        <div style={styles.mainView}>
          <Header/>
          <Grommet.Box direction="row" align="start" justify="center" tag="aside">
          <Grommet.Box pad='medium'>
            <Social/>
          </Grommet.Box>
          <div style={styles.MainContainer}>
            <MainContainer contentComponent={this.props.children} />
          </div>
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
