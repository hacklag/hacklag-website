import React, { Component, PropTypes } from 'react';
import { connect, formize, observer } from 'utils';
import { Button } from 'leafs';
import { Split } from 'twigs';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

@observer
@connect(({ dataRoot }) => ({
  signup: dataRoot.signup.bind(dataRoot),
  notice: dataRoot.notice,
}))
@observer
@formize({
  fields: [
    {
      name: 'email',
      type: 'text',
      placeholder: 'Your email...',
      value: '',
    },
  ],
})
@observer
export default class SignupForm extends Component {
  static formName = 'SignupForm';
  static propTypes = {
    form: PropTypes.object.isRequired,
    signup: PropTypes.func.isRequired,
    notice: PropTypes.object.isRequired,
  }

  render() {
    const { form: { submit, setValue, fields }, signup, notice } = this.props;

    return (
      <form className={cx('SignupForm')} onSubmit={(event) => submit(event, signup)}>
        <p className="mb-">Please sign up and we will send you an invitation to our Forum and Chat.</p>
        <Split>
          <input className={cx('SignupForm__input')} onChange={setValue} {...fields.email} />
          <Button className="Btn--primary ml- ph" type="submit">Submit</Button>
        </Split>
        {notice.message && (
          <p
            className={cx('mt- ta-c', {
              isSuccess: notice.status === 'success',
              isFailure: notice.status === 'failure',
            })}
          >
            {notice.message}
          </p>
        )}
      </form>
    );
  }
}
