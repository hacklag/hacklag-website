import React, { PropTypes } from 'react';
import { connect } from 'utils';
import { Match, Miss } from 'react-router';

import Landing from 'views/Landing';
import Sponsors from 'views/Sponsors';
import NotFound from 'views/NotFound';

const Routes = () => (
  <div className="App">
    <Match pattern="/" exactly component={Landing} />
    <Match pattern="/sponsors" exactly component={Sponsors} />
    <Miss component={NotFound} />
  </div>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default connect(Routes);
