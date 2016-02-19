import React from 'react';
import Header from '../apps/Header';
import Social from '../apps/Social';
import Footer from '../apps/Footer';
import SponsorsBar from '../common/SponsorsBar';
import MainContainer from '../common/MainContainer';
import {Grid, Row, Col} from 'react-flexbox-grid';
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
      mainGrid: {
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
          <Grid fluid={true} style={styles.mainGrid}>
            <Row>
              <Col xs={12} sm={4} md={3}>
                <Social/>
              </Col>
              <Col xs={12} sm={8} md={6}>
                <MainContainer>
                  {this.props.children}
                </MainContainer>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <SponsorsBar/>
              </Col>
            </Row>
          </Grid>
          <Footer/>
        </div>
      </div>
    );
  }
});
