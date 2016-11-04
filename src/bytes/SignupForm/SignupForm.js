import React, { PropTypes } from 'react';
import { connect } from 'utils';
import { Button, Split } from 'bits';
import classNames from 'classnames/bind';
import styles from './styles.css';
import formize from './SignupForm.formize';

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
      <p className="u-mb-">Please sign up and we will send you an invitation to our Forum and Chat.</p>

      <Split>
        <input className={cx('SignupForm__input')} {...fields.email} />
        <Button
          className="Btn--primary u-ml- u-ph"
          type="submit"
          disabled={isLoading ? isLoading.status : false}
        >
          Submit
        </Button>
      </Split>

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
