import React from 'react';

export default React.createClass({
  displayName: 'MainContainer',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  getStyles() {
    return {
      componentBody: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#565a5f',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        height: '100%'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        {this.props.children}
      </div>
    );
  }
});
