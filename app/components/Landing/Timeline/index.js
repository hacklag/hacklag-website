/**
*
* Timeline
*
*/

import React from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';
import { Follow } from 'react-twitter-widgets';
import FacebookProvider, { Like } from 'react-facebook';
import cx from 'classnames';

export default () => (
  <div className={styles.Section}>
    <div className="wrapper">
      <div className={styles.Timeline}>
        <div className={styles.Timeline__section}>
          <div className={styles.Timeline__description}>
            <h2 className={styles.Section__title}>
              Brace yourself,
              <div>epic events are comming!</div>
            </h2>
            <h3 className={styles.Section__tagline}>
              We like to actively spend our time by hosting events, working on projects or just hanging out together. Check out what’s comming.
            </h3>
            <Link className="Btn Btn--primary" to="/events">View all events</Link>
          </div>


          <div className={styles.Timeline__line}>
            <div
              className={cx(
                styles.Timeline__item,
                styles['Timeline__item--right']
              )}
            >
              <div className={styles.Timeline__itemPoint}></div>
              <div className={styles.Timeline__itemTitle}>Geeks Girls Carrots</div>
              <div className={styles.Timeline__itemDate}>12 August at 19:00</div>
            </div>
            <div
              className={cx(
                styles.Timeline__item,
                styles['Timeline__item--right']
              )}
            >
              <div className={styles.Timeline__itemPoint}></div>
              <div className={styles.Timeline__itemTitle}>PyStok</div>
              <div className={styles.Timeline__itemDate}>24 July at 18:00</div>
            </div>
            <div
              className={cx(
                styles.Timeline__item,
                styles['Timeline__item--right']
              )}
            >
              <div className={styles.Timeline__itemPoint}></div>
              <div className={styles.Timeline__itemTitle}>Girls Geeks Carrots</div>
              <div className={styles.Timeline__itemDate}>12 August at 18:00</div>
            </div>
          </div>
        </div>
        {/* /.Timeline__section */}

        <div className={styles.Timeline__section}>
          <div
            className={cx(
              styles.Timeline__description,
              styles['Timeline__description--right']
            )}
          >
            <h2 className={styles.Section__title}>
              Oh, look!
              <div>People are talking about us</div>
            </h2>
            <h3 className={styles.Section__tagline}>
              We like to actively spend our time by hosting events, working on projects or just hanging out together. Check out what’s comming.
            </h3>
            <Link className="Btn Btn--primary" to="https://twitter.com/HacklagHQ">Check our Twitter</Link>
          </div>

          <div className={styles.Timeline__line}>
            <div
              className={cx(
                styles.Timeline__item,
                styles['Timeline__item--left'],
                styles['Timeline__item--tweet']
              )}
            >
              <div className={styles.Timeline__itemPoint}></div>
              <img className={styles.Timeline__itemImage} src="https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/48.jpg" alt="" />
              <div className={styles.Timeline__itemTitle}>
                Maciej Korsan <span className={styles.Timeline__itemMeta}>&sdot; May 23</span>
              </div>
              <div className={styles.Timeline__itemContent}>
                <a href="">#reactjsnight</a> <a href="">#hacklag</a> <a href="">@HacklagHQ</a> <a href="">#białystok</a> just started :) <a href="">@mkucharz</a>
              </div>
            </div>
            <div
              className={cx(
                styles.Timeline__item,
                styles['Timeline__item--left'],
                styles['Timeline__item--tweet']
              )}
            >
              <div className={styles.Timeline__itemPoint}></div>
              <img className={styles.Timeline__itemImage} src="https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/48.jpg" alt="" />
              <div className={styles.Timeline__itemTitle}>
                Maciej Korsan <span className={styles.Timeline__itemMeta}>&sdot; May 23</span>
              </div>
              <div className={styles.Timeline__itemContent}>
                <a href="">#reactjsnight</a> <a href="">#hacklag</a> <a href="">@HacklagHQ</a> <a href="">#białystok</a> just started :) <a href="">@mkucharz</a>
              </div>
            </div>
            <div
              className={cx(
                styles.Timeline__item,
                styles['Timeline__item--left'],
                styles['Timeline__item--tweet']
              )}
            >
              <div className={styles.Timeline__itemPoint}></div>
              <img className={styles.Timeline__itemImage} src="https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/48.jpg" alt="" />
              <div className={styles.Timeline__itemTitle}>
                Maciej Korsan <span className={styles.Timeline__itemMeta}>&sdot; May 23</span>
              </div>
              <div className={styles.Timeline__itemContent}>
                <a href="">#reactjsnight</a> <a href="">#hacklag</a> <a href="">@HacklagHQ</a> <a href="">#białystok</a> just started :) <a href="">@mkucharz</a>
                <a href="">#reactjsnight</a> <a href="">#hacklag</a> <a href="">@HacklagHQ</a> <a href="">#białystok</a> just started :) <a href="">@mkucharz</a>
              </div>
            </div>
          </div>
        </div>
        {/* /.Timeline__section */}
      </div>
      {/* /.Timeline */}
    </div>
    <h3 className={styles.Section__socialTitle}>Pssst! Want to know more about Hacklag?</h3>
    <div className={styles.Section__social}>
      <FacebookProvider appID="227357543966131">
        <Like href="https://www.facebook.com/HacklagHQ" action="like" size="small" showFaces={false} share={false} layout="button" />
      </FacebookProvider>
      <Follow
        username="HacklagHQ"
        options={{
          showCount: false,
        }}
      />
    </div>
    {/* /.wrapper */}
  </div>
);
