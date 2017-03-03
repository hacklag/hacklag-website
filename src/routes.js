import React, { PropTypes } from 'react';
import { connect } from 'utils';
import { Match, Miss } from 'react-router';

import Landing from 'views/Landing';
import Sponsors from 'views/Sponsors';
import Volunteers from 'views/Volunteers';
import NotFound from 'views/NotFound';

const Routes = () => (
  <div className="App">
    <Match pattern="/" exactly component={Landing} />
    <Match pattern="/sponsors" exactly component={Sponsors} />
    <Match pattern="/volunteers" exactly component={Volunteers} />
    <Miss component={NotFound} />
  </div>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default connect(Routes);
