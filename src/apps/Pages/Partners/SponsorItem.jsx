import React from 'react';
import {Card, CardMedia, CardText, CardTitle} from 'material-ui';

export default React.createClass({

  displayName: 'Sponsor Item',

  propTypes: {
    sponsor: React.PropTypes.any.isRequired
  },

  getStyles() {
    return {
      partnerLogo: {
        width: '',
        maxHeight: 300,
        minHeight: 50,
        maxWidth: 400,
        minWidth: 50,
        marginBottom: 16,
        margin: 'auto',
        borderBottom: '1px solid #eceff2'
      },
      logoContainer: {
        margin: 'auto',
        maxWidth: 400,
        marginTop: 16
      },
      itemStyle: {
        marginTop: 16
      }
    };
  },

  render() {
    const styles = this.getStyles();
    const sponsor = this.props.sponsor;

    return (
      <Card style={styles.itemStyle}>
        <CardMedia style={styles.logoContainer}>
          <a src={sponsor.page}>
            <img
              style={styles.partnerLogo}
              src={'img/sponsors/' + sponsor.logo} />
          </a>
        </CardMedia>
        <CardTitle
          title={sponsor.title}
          subtitle={sponsor.subtitle} />
        <CardText>
          {sponsor.desc}
        </CardText>
      </Card>
    );
  }
});
