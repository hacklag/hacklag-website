import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      count: 0
    };
  },

  getStyles() {
    return {
      leftNav: {
        paddingTop: 64,
        zIndex: 7,
        overflow: 'visible'
      },
      menuItemStyleSubheader: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: 12,
        paddingTop: 4,
        fontWeight: 800
      },
      button: {
        background: '#f1c00f',
        border: 0,
        padding: 20,
        width: 100
      },
      border: {
        border: '1px solid black',
        textAlign: 'center'
      }
    };
  },

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  },

  incrementMore() {
    this.setState({
      count: this.state.count + 2
    });
  },

  render() {
    const styles = this.getStyles();

    return (
        <div style={styles.border}>
            <h1>Count Forward: {this.state.count}</h1>
            <button style={styles.button} type="button" onClick={this.incrementCount}>+</button>
            <button style={styles.button} type="button" onClick={this.incrementMore}>++</button>
        </div>
    );
  }
});
