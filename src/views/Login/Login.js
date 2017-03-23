import React, { PropTypes } from 'react';
import { Wrapper, Button } from 'bits';
import { Header, Footer } from 'bytes';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Landing = ({
  store: {
    messages,
    pending,
  },
  services: {
    user: {
      login,
    },
  },
}) => {
  const messageLogin = messages.get('user.login');
  const isLoading = pending.get('user.login');
  const handleSubmit = e => {
    const email = e.target.childNodes[1].value;
    e.preventDefault();
    const clearNodeValues = () => {
      e.target.childNodes.forEach(node => {
        const nodec = node;
        nodec.value = '';
      });
    };
    login(email);
    clearNodeValues();
  };
  return (
    <div className={cn('Landing')}>
      <Header />

      <div className={cn('Section', 'Section--primary')}>
        <Wrapper>
          <div className={cn('Section__content')} id="Login">
            <div className={cn('Login--wrapper')}>
              <div className={cn('Login--form')}>
                <form onSubmit={handleSubmit}>
                  <label htmlFor={'Email'}>Email</label>
                  <input type={'text'} name={'email'} placeholder={'Email'} className={cn('Login--form_email')} />
                  <Button type={'submit'} name={'submit'} className={'btn-primary'} disabled={isLoading ? isLoading.status : false}>Submit</Button>
                  {messageLogin && (
                    <div>
                      <p
                        className={cn('u-mt- u-ta-c', {
                          isSuccess: messageLogin.status === 'success',
                          isFailure: messageLogin.status === 'failure',
                        })}
                      >
                      {messageLogin.message}
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
