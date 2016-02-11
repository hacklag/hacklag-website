import React from 'react';
import MUI from 'material-ui';

export default React.createClass({
  displayName: 'SponsorsBarListRender',

  propTypes: {
    list: React.PropTypes.node
  },

  getStyles() {
    return {
      partnerLogo: {
        maxHeight: 42,
        marginBottom: 16,
        display: 'block',
        margin: 16,
        borderBottom: '1px solid #eceff2'
      },
      mainUl: {
        listStyleType: 'none',
        marginLeft: 0
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div>
          <ul style={styles.mainUl}>
            {this.props.list.map(function(listValue) {
              return (
                <li>
                  <a href={listValue[0]}>
                    <img style={styles.partnerLogo} src={'img/sponsors/' + listValue[1]} />
                  </a>
                </li>
                );
            })}
          </ul>
        </div>
    );
  }
});
