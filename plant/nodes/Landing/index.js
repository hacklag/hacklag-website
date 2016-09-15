import React, { Component, PropTypes } from 'react';
import { connect, observer, moment } from 'utils';
import { Link, Icon } from 'leafs';
import { Wrapper, Nav, Join, Split } from 'twigs';
import { Follow } from 'react-twitter-widgets';
import FacebookProvider, { Like } from 'react-facebook';
import styles from './styles.scss';

const cn = require('classnames/bind').bind(styles);

const PLAN_HOTDESK_URL = 'https://bialystok.hacklag.org/membership_signup/new?plan_id=f7ca61fc7a2d3d6f4b1b190858a60c56';
const PLAN_HOTDESK_PLUS_URL = 'https://bialystok.hacklag.org/membership_signup/new?plan_id=d5a026465e7d82761c6e2c4f174f61f4';
const PLAN_PERMAMENT_URL = 'https://bialystok.hacklag.org/membership_signup/new?plan_id=d67e8ace7b83af12dcfdc74905eb0811';
const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?src=hacklag.org_aqt391ob3q7uj2lle7d6flknvg%40group.calendar.google.com';

import Feature1Img from './images/feature-1.png';
import Feature2Img from './images/feature-2.png';
import Feature3Img from './images/feature-3.png';

import HackbatImg from 'images/hackbat.svg';
import GGCImg from './images/logo-ggc.png';
import PMBImg from './images/logo-pmb.png';
import AexolImg from './images/logo-aexol.png';
import NadaktywniImg from './images/logo-nadaktywni.png';
import MobileBialystokImg from './images/logo-mobile-bialystok.png';

@connect(({ dataRoot }) => ({
  fetchSponsors: dataRoot.fetchSponsors,
  fetchTweets: dataRoot.fetchTweets,
  fetchEvents: dataRoot.fetchEvents,
  sponsors: dataRoot.sponsors,
  tweets: dataRoot.tweets,
  events: dataRoot.events,
}))
@observer
export default class Landing extends Component {
  static propTypes = {
    fetchSponsors: PropTypes.func.isRequired,
    fetchTweets: PropTypes.func.isRequired,
    fetchEvents: PropTypes.func.isRequired,
    sponsors: PropTypes.object.isRequired,
    tweets: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
  }

  componentDidMount = () => {
    this.props.fetchTweets();
    this.props.fetchEvents();
    this.props.fetchSponsors();
  }

  render() {
    return (
      <div>
        <div className={cn('Header')}>
          <Wrapper className={cn('Header__inner')}>
            <div className={cn('Header__bar')}>
              <Nav className={cn('Header__nav', 'Header__nav--first')}>
                <a className={cn('Header__nav-link')} href="#events">Events</a>
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

            <div className={cn('Header__content')}>
              <h1 className={cn('Header__content-title')}>
                <b>HACKLAG</b> is a <b>community</b> aiming to connect <b>technology enthusiasts</b> by organizing <b>creative workspaces</b>.
              </h1>
              <div className={cn('Header__content-subline')}>
                Sounds good?
              </div>
              <a className="Btn Btn--primary" href="#offices">Join us!</a>
            </div>
            {/* ./Header__content */}


            <div className={cn('Features')}>
              <div className={cn('Features__item')}>
                <div className={cn('Features__image')}>
                  <img src={Feature1Img} role="presentation" width="61" height="66" />
                </div>
                <h2 className={cn('Features__title')}>
                  International organization
                </h2>
                <p className={cn('Features__content')}>
                  Our members are from different places all over the world. We use english in our whole communication.
                </p>
                {/* <Link className="Btn Btn--primary" to="/about">Learn more</Link> */}
              </div>
              <div className={cn('Features__item')}>
                <div className={cn('Features__image')}>
                  <img src={Feature2Img} role="presentation" width="45" height="67" />
                </div>
                <h2 className={cn('Features__title')}>
                  Open space offices
                </h2>
                <p className={cn('Features__content')}>
                  In every workspace we have a lot of space for collaboration. Our members can choose from <b>hotdesks</b> or rent their own desk.
                </p>
                {/* <Link className="Btn Btn--primary" to="/about">View offices</Link> */}
              </div>
              <div className={cn('Features__item')}>
                <div className={cn('Features__image')}>
                  <img src={Feature3Img} role="presentation" width="58" height="58" />
                </div>
                <h2 className={cn('Features__title')}>
                  Epic events
                </h2>
                <p className={cn('Features__content')}>
                  We support local communities by sharing our workspace for different types of events: meetups, workshops and parties ;)
                </p>
                {/* <Link className="Btn Btn--primary" to="/about">Check events</Link> */}
              </div>
            </div>
          </Wrapper>
        </div>
        {/* ./Header */}

        <div className={cn('Section', 'Section--primary')}>
          <Wrapper>
            <div className={cn('Section__content')}>
              <h2 className={cn('Section__title')}>Meet our awesome sponsors</h2>
              <h3 className={cn('Section__tagline')}>We're non-profit organisation so we need your help to stay alive.</h3>

              <div className={cn('Sponsors')}>
                {this.props.sponsors.items.length ? [
                  <div>
                    <img src={this.props.sponsors.items[0].logo.value} alt={this.props.sponsors.items[0].name} />
                  </div>,
                  <div>
                    <img src={this.props.sponsors.items[1].logo.value} alt={this.props.sponsors.items[1].name} />
                    <img src={this.props.sponsors.items[2].logo.value} alt={this.props.sponsors.items[2].name} />
                  </div>,
                ] : null}
              </div>
              {/* /.Sponsors */}

              <Join className="ta-c" spacing="sm">
                {/* <Link className="Btn Btn--secondary" to="/sponsors">View all sponsors</Link> */}
                <a className="Btn Btn--primary" href="mailto:sponsorship@hacklag.org">Become a sponsor</a>
              </Join>

              <div className={cn('Section__separator')}></div>

              <h2 className={cn('Section__title')}>And our fabulous partners</h2>
              <h3 className={cn('Section__tagline')}>Together we can achieve much more!</h3>

              <div className={cn('Partners')}>
                <img src={GGCImg} alt="Girls Geeks Carrots" />
                <img src={NadaktywniImg} alt="Nadaktywni" />
                <img src={AexolImg} alt="Aexol" />
                <img src={PMBImg} alt="PMB" />
                <img src={MobileBialystokImg} alt="Mobile Białystok" />
              </div>
              {/* /.Partners */}
            </div>
            {/* /.Section__content */}
          </Wrapper>
        </div>
        {/* /.Section */}

        <div className={cn('Section', 'Section--secondary')} id="events">
          <Wrapper>
            <div className={cn('Timeline')}>
              <div className={cn('Timeline__section')}>
                <div className={cn('Timeline__description')}>
                  <h2 className={cn('Section__title')}>
                    Brace yourself, <div>epic events are comming!</div>
                  </h2>
                  <h3 className={cn('Section__tagline')}>
                    We like to actively spend our time by hosting events, working on projects or just hanging out together. Check out what’s comming.
                  </h3>
                  <a className="Btn Btn--primary" href={CALENDAR_URL}>View all events</a>
                </div>

                <div className={cn('Timeline__line')}>
                  {this.props.events.items.map((item, index) => (
                    <div key={index} className={cn('Timeline__item', 'Timeline__item--right')}>
                      <div className={cn('Timeline__item-title')}>{item.summary}</div>
                      <div className={cn('Timeline__item-date')}>{
                        item.start.dateTime ?
                          moment(item.start.dateTime).format('D MMMM [at] HH:mm') :
                          moment(item.start.date).format('D MMMM')
                      }</div>
                    </div>
                  ))}
                  {Array.from(new Array(Math.abs(3 - this.props.events.items.length))).map((i, index) => (
                    <div key={index} className={cn('Timeline__item', 'Timeline__item--right', 'Timeline__item--bare')} />
                  ))}
                </div>
              </div>
              {/* /.Timeline__section */}

              <div className={cn('Timeline__section')}>
                <div className={cn('Timeline__description', 'Timeline__description--right')}>
                  <h2 className={cn('Section__title')}>
                    Oh, look! <div>People are talking about us</div>
                  </h2>
                  <h3 className={cn('Section__tagline')}>
                    We like to actively spend our time by hosting events, working on projects or just hanging out together. Check out what’s comming.
                  </h3>
                  <a className="Btn Btn--primary" href="https://twitter.com/HacklagHQ">Check our Twitter</a>
                </div>

                <div className={cn('Timeline__line')}>
                  {this.props.tweets.items.map((item, index) => (
                    <div key={index} className={cn('Timeline__item', 'Timeline__item--left', 'Timeline__item--tweet')}>
                      <a href={item.user_url}>
                        <img className={cn('Timeline__item-image')} src={item.user_image} role="presentation" />
                      </a>
                      <div className={cn('Timeline__item-title')}>
                        <a href={item.user_url} className={cn('Timeline__item-username')}>{item.user_name}</a> &sdot;
                        <a href={item.tweet_url} className={cn('Timeline__item-meta')}>
                          {' '}
                          {moment(item.tweet_date.value).format('MMM D')}
                        </a>
                      </div>
                      <div
                        className={cn('Timeline__item-content')}
                        dangerouslySetInnerHTML={{ __html: item.tweet_text }}
                      />
                    </div>
                  ))}
                  {Array.from(new Array(Math.abs(3 - this.props.tweets.items.length))).map((i, index) => (
                    <div key={index} className={cn('Timeline__item', 'Timeline__item--left', 'Timeline__item--bare')} />
                  ))}
                </div>
              </div>
              {/* /.Timeline__section */}
            </div>
            {/* /.Timeline */}

            <h3 className={cn('Section__social-title')}>Pssst! Want to know more about HACKLAG?</h3>
            <div className={cn('Section__social')}>
              <FacebookProvider appID="1108028089293935">
                <Like href="https://www.facebook.com/HacklagHQ" action="like" size="small" showFaces={false} share={false} layout="button" colorScheme="light" />
              </FacebookProvider>
              <Follow
                username="HacklagHQ"
                options={{
                  showCount: false,
                }}
              />
            </div>
          </Wrapper>
        </div>
        {/* /.Section */}

        <div className={cn('Section', 'Section--tertiary')} id="offices">
          <Wrapper>
            <h2 className={cn('Section__title')}>We work and have fun in awesome workspace!</h2>
            <h3 className={cn('Section__tagline')}>And you can work there too.</h3>

            <div className={cn('OfficeFeatures')}>
              <div className={cn('OfficeFeatures__item')}>
                <h4 className={cn('OfficeFeatures__item-title')}>Awesome community</h4>
                <p className={cn('OfficeFeatures__item-content')}>Meet technology enthusiasts, people willing to disrupt the status quo.  Join us to have fun by working on innovative projects.</p>
              </div>
              <div className={cn('OfficeFeatures__item')}>
                <h4 className={cn('OfficeFeatures__item-title')}>Premium location</h4>
                <p className={cn('OfficeFeatures__item-content')}>Our workspace is in the very center of Białystok.  It is very convenient location for work and after work fun.</p>
              </div>
              <div className={cn('OfficeFeatures__item')}>
                <h4 className={cn('OfficeFeatures__item-title')}>24/7 access</h4>
                <p className={cn('OfficeFeatures__item-content')}>24/7 access to the hotdesk, permanent desk or a private office for your team.</p>
              </div>

              <div className={cn('OfficeFeatures__item')}>
                <h4 className={cn('OfficeFeatures__item-title')}>High quality Wi-Fi</h4>
                <p className={cn('OfficeFeatures__item-content')}>We are using Ubiquiti UniFi® technology to deliver extraordinarily Wi-Fi network performance and coverage.</p>
              </div>
              <div className={cn('OfficeFeatures__item')}>
                <h4 className={cn('OfficeFeatures__item-title')}>Kitchen</h4>
                <p className={cn('OfficeFeatures__item-content')}>In our office, we have a well-equipped kitchen with a big table where you can enjoy your meal.</p>
              </div>
              <div className={cn('OfficeFeatures__item')}>
                <h4 className={cn('OfficeFeatures__item-title')}>Projectors & great audio</h4>
                <p className={cn('OfficeFeatures__item-content')}>We have two high-quality, wireless projectors with screens and 14 speakers placed around the workspace.</p>
              </div>
              <div className={cn('OfficeFeatures__item')}>
                <h4 className={cn('OfficeFeatures__item-title')}>Meeting rooms</h4>
                <p className={cn('OfficeFeatures__item-content')}>Small and big rooms for private conversations, team meetings and client appointments.</p>
              </div>
              <div className={cn('OfficeFeatures__item')}>
                <h4 className={cn('OfficeFeatures__item-title')}>IoT Lab</h4>
                <p className={cn('OfficeFeatures__item-content')}>In our lab you can play with Internet of Things or 3d printing. We have all the necessery tools.</p>
              </div>
            </div>
            {/* /.OfficeFeatures */}

            <div className={cn('Plans')}>
              <a className={cn('Plans__item', 'isAlpha')} href="https://bialystok.hacklag.org" rel="noopener noreferrer" target="_blank">
                <div className={cn('Plans__item-inner')}>
                  <h4 className={cn('Plans__item-title')}>Community Member</h4>
                  <div className={cn('Plans__item-price')}>Free</div>
                  <ul className={cn('Plans__features')}>
                    <li>hacklag.me Google account</li>
                    <li>Slack and Forum access</li>
                    <li>Meetups invitations</li>
                  </ul>
                  <button className={cn('Plans__item-button')}>Signup here</button>
                </div>
              </a>
              {/* /.Plans__item */}

              <a className={cn('Plans__item', 'isBeta')} href={PLAN_HOTDESK_URL} rel="noopener noreferrer" target="_blank">
                <div className={cn('Plans__item-inner')}>
                  <h4 className={cn('Plans__item-title')}>Hotdesk</h4>
                  <div className={cn('Plans__item-price')}>300 PLN net per month</div>
                  <ul className={cn('Plans__features')}>
                    <li>24/7 access</li>
                    <li>100 Mbit/s internet connection</li>
                    <li>Coffee and snaks</li>
                    <li>Unlimited Baroque room access</li>
                  </ul>
                  <button className={cn('Plans__item-button')}>Choose plan</button>
                </div>
              </a>
              {/* /.Plans__item */}

              <a className={cn('Plans__item', 'isGamma')} href={PLAN_HOTDESK_PLUS_URL} rel="noopener noreferrer" target="_blank">
                <div className={cn('Plans__item-inner')}>
                  <h4 className={cn('Plans__item-title')}>Hotdesk Plus</h4>
                  <div className={cn('Plans__item-price')}>400 PLN net per month</div>
                  <ul className={cn('Plans__features')}>
                    <li>24/7 access (all locations)</li>
                    <li>200 Mbit/s internet connection</li>
                    <li>Coffee and snaks</li>
                    <li>Unlimited Baroque room access</li>
                    <li>4 hours of meeting room access </li>
                  </ul>
                  <button className={cn('Plans__item-button')}>Choose plan</button>
                </div>
              </a>
              {/* /.Plans__item */}

              <a className={cn('Plans__item', 'isDelta')} href={PLAN_PERMAMENT_URL} rel="noopener noreferrer" target="_blank">
                <div className={cn('Plans__item-inner')}>
                  <h4 className={cn('Plans__item-title')}>Permament Desk</h4>
                  <div className={cn('Plans__item-price')}>500 PLN net per month</div>
                  <ul className={cn('Plans__features')}>
                    <li>24/7 access (all locations)</li>
                    <li>200 Mbit/s internet connection</li>
                    <li>Coffee and snaks</li>
                    <li>Unlimited Baroque room access</li>
                    <li>8 hours of meeting room access</li>
                  </ul>
                  <button className={cn('Plans__item-button')}>Choose plan</button>
                </div>
              </a>
              {/* /.Plans__item */}
            </div>
            {/* /.Plans */}
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
      </div>
    );
  }
}
