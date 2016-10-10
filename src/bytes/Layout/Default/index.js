import React, { PropTypes } from 'react';
/**
 * NOTE: For some reason importing this bytes using:

     import { Wrapper, Header } from 'bytes'

 * doesn't work in production build
 */
import Header from 'bytes/Header';
import Wrapper from 'bits/Wrapper';

const Default = ({ children }) => (
  <div>
    <Header />
    <Wrapper className="u-pv">
      {children}
    </Wrapper>
  </div>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
