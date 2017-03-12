import React, { PropTypes } from 'react';
import { Wrapper, Join, Button } from 'bits';
import { Header, Footer } from 'bytes';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Landing = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
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

                  <label htmlFor={'login'}>Login</label>
                  <input type={'text'} name={'login'} placeholder={'Login'} className={cn('Register--form_login')} />

                  <label htmlFor={'passowrd'}>Password</label>
                  <input type={'password'} name={'password'} placeholder={'Password'} className={cn('Register--form_password')} />

                  <label htmlFor={'email'}>Email</label>
                  <input type={'email'} name={'email'} placeholder={'jon@doe.com'} className={cn('Register--form_email')} />

                  <label htmlFor={'Volunteer'}>I want to be a volunteer</label>
                  <input type={'checkbox'} name={'volunteer'} placeholder={'I want to be a volunteer'} className={cn('Register--form_volunteer')} />

                  <Button type={'submit'} name={'submit'} className={'primary'}>Submit</Button>
                </form>
              </div>
            </div>
            <Join className="u-ta-c" spacing="sm">
              <a className="Btn Btn--primary" href="mailto:sponsorship@hacklag.org">Join</a>
            </Join>
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
