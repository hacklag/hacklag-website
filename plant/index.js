import 'styles/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router as Plant, browserHistory } from 'react-router';
import { RootProvider as Ground } from 'utils';
import nodes from 'nodes';
import roots from 'roots';
if (process.env.NODE_ENV === 'production') {
  window.analytics.load(process.env.HACKLAG_PRODUCTION_SEGMENT_WRITE_KEY);
} else {
  window.analytics.load(process.env.HACKLAG_STAGING_SEGMENT_WRITE_KEY);
}
render(
  <Ground roots={roots}>
    <Plant history={browserHistory} routes={nodes} />
  </Ground>,
  document.getElementById('plant')
);
