import React, { Component, PropTypes } from 'react';
import { Wrapper } from 'twigs';

export default class Default extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        <Wrapper className="pv">
          {this.props.children}
        </Wrapper>
      </div>
    );
  }
}
