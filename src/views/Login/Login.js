import React, { PropTypes } from 'react';
import { Wrapper, Join } from 'bits';
import { Header, Footer } from 'bytes';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Landing = () => {
  function test() {

  }
  test();
  return (
    <div className={cn('Landing')}>
      <Header />

      <div className={cn('Section', 'Section--primary')}>
        <Wrapper>
          <div className={cn('Section__content')} id="Login">
            <div className={cn('Login--wrapper')}>
              <div className={cn('Login--form')}>
                <form>
                  <label htmlFor={'login'}>Login</label>
                  <input type={'text'} name={'login'} placeholder={'Login'} className={cn('Login--form_login')} />

                  <label htmlFor={'passowrd'}>Password</label>
                  <input type={'password'} name={'password'} placeholder={'Password'} className={cn('Login--form_password')} />
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
