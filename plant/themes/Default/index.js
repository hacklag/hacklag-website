import React, { Component, PropTypes } from 'react';
import { Header, Wrapper } from 'twigs';

export default class Default extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        <Header />
        <Wrapper className="pv">
          {this.props.children}
        </Wrapper>
      </div>
    );
  }
}
