import React from 'react';
import { Link } from 'bits';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const NotFound = () => (
  <div className={cn('NotFound')}>
    <div>
      <h1 className={cn('NotFound__title')}>Page was not found.</h1>
      <Link className={cn('NotFound__back')} to="/">Back to home</Link>
    </div>
  </div>
  );
export default connect(NotFound, { tracker: {} });
