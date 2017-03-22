import React, { PropTypes } from 'react';
import { Wrapper, Button } from 'bits';
import { Header, Footer } from 'bytes';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Landing = ({
  store: {
    messages, pending,
  },
  services: {
    user: { register },
  },
}) => {
  const messageRegister = messages.get('user.register');
  const isLoading = pending.get('user.register');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectNodeValue = nodeNumber => e.target.childNodes[nodeNumber];
    const clearNodeValues = () => {
      e.target.childNodes.forEach(node => {
        const nodec = node;
        nodec.value = '';
      });
      selectNodeValue(7).checked = 'false';
    };
    const form = {
      firstname: selectNodeValue(1).value,
      lastname: selectNodeValue(3).value,
      email: selectNodeValue(5).value,
      isVolunteer: selectNodeValue(7).checked,
    };
    register(form);
    clearNodeValues();
  };
  return (
    <div className={cn('Landing')}>
      <Header />

      <div className={cn('Section', 'Section--primary')}>
        <Wrapper>
          <div className={cn('Section__content')} id="register">
            <div className={cn('Register--wrapper')}>
              <div className={cn('Register--form')}>
                <form onSubmit={handleSubmit}>
                  <label htmlFor={'firstname'}>Firstname</label>
                  <input type={'text'} name={'firstname'} placeholder={'Firstname'} className={cn('Register--form_firstname')} />

                  <label htmlFor={'lastname'}>Lastname</label>
                  <input type={'text'} name={'lastname'} placeholder={'Lastname'} className={cn('Register--form_lastname')} />

                  <label htmlFor={'email'}>Email</label>
                  <input type={'email'} name={'email'} placeholder={'jon@doe.com'} className={cn('Register--form_email')} />

                  <label htmlFor={'Volunteer'}>I want to be a volunteer</label>
                  <input type={'checkbox'} name={'volunteer'} value="off" className={cn('Register--form_volunteer')} />
                  <Button type={'submit'} name={'submit'} className={'btn-primary'} disabled={isLoading ? isLoading.status : false}>Submit</Button>
                  {messageRegister && (
                    <div>
                      <p
                        className={cn('u-mt- u-ta-c', {
                          isSuccess: messageRegister.status === 'success',
                          isFailure: messageRegister.status === 'failure',
                        })}
                      >
                      {messageRegister.message}
                      </p>
                    </div>
                )}
                </form>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <Footer />
    </div>
  );
};

Landing.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default connect(Landing, { tracker: {} });
