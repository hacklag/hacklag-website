import 'styles/styles.css';
import React from 'react';
import { Provider } from 'utils';
import { BrowserRouter as Router } from 'react-router';
// Single source of data
import store from 'store';
// Functions that operate on data in store
import * as services from 'services';

export default (story) => (
  <Provider store={store} services={services}>
    <Router>
      {story()}
    </Router>
  </Provider>
);
