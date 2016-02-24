import React from 'react';
import SponsorItem from './SponsorItem';

export default React.createClass({

  displayName: 'Sponsors List',

  propTypes: {
    sponsors: React.PropTypes.any.isRequired
  },

  getStyles() {
    return {
      componentStyle: {
        padding: 10,
        paddingLeft: 20
      }
    };
  },

  render() {
    let sponsors = [];
    const styles = this.getStyles();

    this.props.sponsors.forEach(function(sponsor) {
      sponsors.push(
        <SponsorItem
          key={sponsor.id}
          sponsor={sponsor} />
      );
    });

    return (
      <div style={styles.componentStyle}>
        {sponsors}
      </div>
    );
  }
});
