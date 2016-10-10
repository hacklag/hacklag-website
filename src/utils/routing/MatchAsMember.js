import React, { PropTypes } from 'react';
import { connect } from 'utils';
import { Redirect, Match } from 'react-router';

const MatchAsMember = ({
  redirectTo = '/auth/login',
  component: Component,
  store: { user: { isLoggedIn } },
  ...rest,
}) => (
  <Match {...rest} render={props => (
    isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: redirectTo,
        state: { from: props.location },
      }} />
    )
  )} />
);

MatchAsMember.propTypes = {
  pathname: PropTypes.string,
  component: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default connect(MatchAsMember);
