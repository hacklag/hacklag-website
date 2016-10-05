import React, { Component, PropTypes } from 'react';
import { connect, observer, segment } from 'utils';
import { Link, Icon } from 'leafs';
import { Wrapper, Nav, Join, Split, Modal, SignupForm } from 'twigs';
import styles from './styles.scss';

const cn = require('classnames/bind').bind(styles);

import HackbatImg from 'images/hackbat.svg';

@segment
@connect(({ dataRoot }) => ({
  fetchSponsors: dataRoot.fetchSponsors,
  sponsors: dataRoot.sponsors,
}))
@observer
export default class Landing extends Component {
  static propTypes = {
    fetchSponsors: PropTypes.func.isRequired,
    sponsors: PropTypes.object.isRequired,
  }

  componentDidMount = () => {
    this.props.fetchSponsors();
  }

  render() {
    return (
      <div>
        <div className={cn('Header')}>
          <Wrapper className={cn('Header__inner')}>
            <div className={cn('Header__bar')}>
              <Nav className={cn('Header__nav', 'Header__nav--first')}>
                <a className={cn('Header__nav-link')} href="/">Home</a>
                <a className={cn('Header__nav-link')} href="/events">Events</a>
                <a className={cn('Header__nav-link')} href="/sponsors">Sponsors</a>
              </Nav>

              <div className={cn('Header__logo')}>
                <Link to="/" className={cn('Header__logo-link')}>
                  <img className={cn('Header__logo-image')} src={HackbatImg} alt="HACKLAG" />
                </Link>
              </div>
              {/* /.Header__logo */}
              <Nav className={cn('Header__nav', 'Header__nav--last')}>
                <a className={cn('Header__nav-link')} href="http://bialystok.hacklag.org">Members area</a>
              </Nav>
            </div>
            {/* /.Header__bar */}
          </Wrapper>
        </div>
        {/* ./Header */}

        <div className={cn('Section', 'Section--primary')}>
          <Wrapper>
            <div className={cn('Section__content')}>
              <h2 className={cn('Section__title')}>All of our awesome sponsors</h2>
              <h3 className={cn('Section__tagline')}>We're non-profit organisation so we need your help to stay alive.</h3>

              <div className={cn('Sponsors')}>
                <div className={cn('Sponsors__item--platinum')}>
                  {this.props.sponsors.items.length && (
                    <img src={this.props.sponsors.items[0].logo.value} alt={this.props.sponsors.items[0].name} />
                  )}
                </div>
                  {this.props.sponsors.items.length && (
                    <div className={cn('Sponsors__item--gold')}>
                      <img src={this.props.sponsors.items[1].logo.value} alt={this.props.sponsors.items[1].name} />
                      <img src={this.props.sponsors.items[2].logo.value} alt={this.props.sponsors.items[2].name} />
                    </div>
                  )}
                <div className={cn('Sponsors__item--wrapper')}>
                {(this.props.sponsors.items.slice(3) || []).map((sponsor, key) =>
                  <div className={cn('Sponsors__logoContainer')} key={key}>
                    <img src={sponsor.logo.value} alt={sponsor.name} key={key} />
                  </div>
                )
                  }
                </div>
              </div>
              {/* /.Sponsors */}

              <Join className="ta-c" spacing="sm">
                <a className="Btn Btn--primary" href="mailto:sponsorship@hacklag.org">Become a sponsor</a>
              </Join>
              {/* /.Partners */}
            </div>
            {/* /.Section__content */}
          </Wrapper>
        </div>
        {/* /.Section */}
        <div className={cn('Footer')}>
          <Wrapper>
            <Split>
              <div className={cn('Footer__copyrights')}>
                &copy; 2016 by Hacklag. All rights reserved.
              </div>
              <div className={cn('Footer__social')}>
                <a className={cn('Footer__social-link')} href="https://www.facebook.com/HacklagHQ">
                  <Icon className={cn('Footer__social-icon')} name="facebook-square" />
                </a>
                <a className={cn('Footer__social-link')} href="https://twitter.com/hacklaghq">
                  <Icon className={cn('Footer__social-icon')} name="twitter-square" />
                </a>
                <a className={cn('Footer__social-link')} href="https://github.com/hacklag">
                  <Icon className={cn('Footer__social-icon')} name="github-square" />
                </a>
                <a className={cn('Footer__social-link')} href="https://hacklag.slack.com">
                  <Icon className={cn('Footer__social-icon')} name="slack" />
                </a>
              </div>
            </Split>
          </Wrapper>
        </div>

        <Modal name="CommunityMemberSignup" title="Join us">
          <SignupForm />
        </Modal>
      </div>
    );
  }
}
