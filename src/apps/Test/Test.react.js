import React from 'react';

export default React.createClass({
  displayName: 'Test',

  componentDidMount() {
    console.log('XXX');
  },
  render() {
    return (
      <div>
        This is your Test app!
      </div>
    );
  }
});
