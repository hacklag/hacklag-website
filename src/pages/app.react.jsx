import React from 'react';
import Header from '../apps/Header';
import Grommet from 'grommet';
import Social from '../apps/Social';
import Footer from '../apps/Footer';
import SponsorsBar from '../common/SponsorsBar';
import MainContainer from '../common/MainContainer';
import MediaQuery from 'react-responsive';

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
      mainDiv: {
        color: '#565a5f',
        backgroundColor: '#f5f8f9'
      },
      container: {
        marginTop: 24
      },
      boxColumns: {
        display: 'flex',
        flexDirection: 'column'
      },
      boxRows: {
        display: 'flex',
        flexDirection: 'row'
      },
      xlSide: {
        width: '25%'
      },
      xlCenter: {
        width: '50%'
      },
      sSide: {
        width: '100%'
      },
      sCenter: {
        width: '100%'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.mainDiv}>
        <div style={styles.mainView}>
          <Header/>
          <div style={styles.container}>
            <MediaQuery orientation='portrait' style={styles.boxColumns}>
              <div style={styles.sSide}>
                <Social/>
              </div>
              <div style={styles.sCenter}>
                <MainContainer>
                  {this.props.children}
                </MainContainer>
              </div>
              <div style={styles.sSide}>
                <SponsorsBar/>
              </div>
            </MediaQuery>
            <MediaQuery orientation='landscape' >
                <MediaQuery minWidth={768} style={styles.boxRows}>
                  <div style={styles.xlSide}>
                    <Social/>
                  </div>
                  <div style={styles.xlCenter}>
                    <MainContainer>
                      {this.props.children}
                    </MainContainer>
                  </div>
                  <div style={styles.xlSide}>
                    <SponsorsBar/>
                  </div>
                </MediaQuery>
                <MediaQuery maxWidth={768} style={styles.boxColumns}>
                  <div style={styles.sSide}>
                    <Social/>
                  </div>
                  <div style={styles.sCenter}>
                    <MainContainer>
                      {this.props.children}
                    </MainContainer>
                  </div>
                  <div style={styles.sSide}>
                    <SponsorsBar/>
                  </div>
                </MediaQuery>
            </MediaQuery>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
});
