import React from 'react';

export default React.createClass({

  displayName: 'Step',


  render() {
    return (
      <div>
        <div>{this.props.topic}</div>
        <div>{this.props.subtopic}</div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});