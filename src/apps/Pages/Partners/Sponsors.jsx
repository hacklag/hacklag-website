import React from 'react';
import {Tabs, Tab} from 'material-ui';
import SponsorsList from './SponsorsList';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default React.createClass({

  displayName: 'Sponsors',

  getInitialState() {
    return {
      slideIndex: 'p'
    };
  },

  getStyles() {
    return {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        paddingLeft: 20,
        marginBottom: 12,
        fontWeight: 400
      }
    };
  },

  handleChange(value) {
    this.setState({
      slideIndex: value
    });
  },

  render() {
    const sponsorsList = [
      {
        title: 'Firma 1',
        subtitle: 'Firma 1',
        desc: 'Opis 1',
        logo: 'logo.jpg',
        page: 'http://lorempixel.com/600/337/nature/',
        id: 1
      },
      {
        title: 'Firma 2',
        subtitle: 'Firma 2',
        desc: 'Opis 2',
        logo: 'logo.jpg',
        page: 'http://lorempixel.com/600/337/nature/',
        id: 2
      }
    ];
    const styles = this.getStyles();

    return (
      <div onClick={injectTapEventPlugin()}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}>
          <Tab
            label="Platinum"
            value="p">
            <div>
              <h2 style={styles.headline}>
                Platinum Partners
              </h2>
              <SponsorsList
                key="p"
                sponsors={sponsorsList} />
            </div>
          </Tab>
          <Tab
            label="Gold"
            value="g">
            <div>
              <h2 style={styles.headline}>
                Gold Partners
              </h2>
              <SponsorsList
                value="g"
                sponsors={sponsorsList} />
            </div>
          </Tab>
          <Tab
            label="Silver"
            value="s">
            <div>
              <h2 style={styles.headline}>
                Silver Partners
              </h2>
              <SponsorsList
                value="s"
                sponsors={sponsorsList} />
            </div>
          </Tab>
          <Tab
            label="Bronze"
            value="b">
            <div>
              <h2 style={styles.headline}>
                Bronze Partners
              </h2>
              <SponsorsList
                value="b"
                sponsors={sponsorsList} />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
});
