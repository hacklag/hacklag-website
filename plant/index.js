import React from 'react';
import { render } from 'react-dom';
import { Router as Plant, browserHistory } from 'react-router';
import { RootProvider as Ground } from 'utils';
import nodes from 'nodes';
import roots from 'roots';

import 'styles/styles.scss';

render(
  <Ground roots={roots}>
    <Plant history={browserHistory} routes={nodes} />
  </Ground>,
  document.getElementById('plant')
);
