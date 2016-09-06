import React, { Component, PropTypes } from 'react';
import { connect, observer, theme } from 'utils';

@observer
@connect(({ userRoot }) => ({
  helloMessage: userRoot.helloMessage,
}))
@theme('Default')
export default class Landing extends Component {
  static propTypes = {
    helloMessage: PropTypes.string,
  }

  render() {
    const { helloMessage } = this.props;

    return (
      <div>
        <p>{helloMessage}!</p>
      </div>
    );
  }
}
