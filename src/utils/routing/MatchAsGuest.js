import React, { PropTypes } from 'react';
import { connect } from 'utils';
import { Redirect, Match } from 'react-router';

const MatchAsGuest = ({
  redirectTo = '/',
  component: Component,
  store: { user: { isLoggedIn } },
  ...rest,
}) => (
  <Match {...rest} render={props => (
    isLoggedIn ? (
      <Redirect to={{
        pathname: redirectTo,
        state: { from: props.location },
      }} />
    ) : (
      <Component {...props} />
    )
  )} />
);

MatchAsGuest.propTypes = {
  component: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default connect(MatchAsGuest);
