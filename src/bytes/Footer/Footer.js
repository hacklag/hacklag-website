import React from 'react';
import { Split, Wrapper, Icon } from 'bits';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Footer = () => (
  <div className={cn('Footer')}>
    <Wrapper>
      <Split>
        <div className={cn('Footer__copyrights')}>
          &copy; 2016 by Hacklag. All rights reserved.
        </div>
        <div className={cn('Footer__social')}>
          <a className={cn('Footer__social-link')} href="https://www.facebook.com/HacklagHQ">
            <Icon className={cn('Footer__social-icon')} name="facebook-square" />
          </a>
          <a className={cn('Footer__social-link')} href="https://twitter.com/hacklaghq">
            <Icon className={cn('Footer__social-icon')} name="twitter-square" />
          </a>
          <a className={cn('Footer__social-link')} href="https://github.com/hacklag">
            <Icon className={cn('Footer__social-icon')} name="github-square" />
          </a>
          <a className={cn('Footer__social-link')} href="https://hacklag.slack.com">
            <Icon className={cn('Footer__social-icon')} name="slack" />
          </a>
        </div>
      </Split>
    </Wrapper>
  </div>
);

export default Footer;
