import React, { PropTypes } from 'react';
import { connect } from 'utils';
import { Button, Split } from 'bits';
import classNames from 'classnames/bind';
import styles from './styles.css';
import formize from './SignupForm.formize';
import ExplorerHQIcon from './icon-explorerhq.png';
import SlackIcon from './icon-slack.svg';
import MeetupIcon from './icon-meetup.svg';

const cx = classNames.bind(styles);

const SignupForm = ({
  formize: {
    submit, fields,
  },
  store: {
    messages, pending,
  },
  services: {
    user: { signup },
  },
}) => {
  const message = messages.get('user.signup');
  const isLoading = pending.get('user.signup');

  return (
    <form className={cx('SignupForm')} onSubmit={(event) => submit(event, signup)}>
      <p>
        <img src={SlackIcon} alt="" width="24" className="u-mr-" />
        Slack access
      </p>

      <p className={cx('u-mt--')}>
        <img src={MeetupIcon} alt="" width="24" className="u-mr-" />
        Meetups invitations
      </p>

      <Split className={cx('u-mt-')}>
        <input className={cx('SignupForm__input')} {...fields.email} />
        <Button
          className="Btn--primary u-ml- u-ph"
          type="submit"
          disabled={isLoading ? isLoading.status : false}
        >
          Submit
        </Button>
      </Split>

      <p className={cx('SignupForm__explorer', 'u-mt- u-ta-c u-micro')}>
        Are you Digital Explorer looking for a new work place in Warsaw or Białystok?

        <a href="http://explorer-hq.com" className={cx('SignupForm__explorer-logo')}>
          <img src={ExplorerHQIcon} alt="" width="30" />
        </a>
      </p>

      {message && (
        <p
          className={cx('u-mt- u-ta-c', {
            isSuccess: message.status === 'success',
            isFailure: message.status === 'failure',
          })}
        >
          {message.message}
        </p>
      )}
    </form>
  );
};

SignupForm.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
  formize: PropTypes.object.isRequired,
};

export default connect(SignupForm, { formize });
