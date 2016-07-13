import React from 'react';
import { connect } from 'react-redux';
import selectLanding from './selectors';
import { fetchTweets, fetchEvents } from 'modules/landing';
import Header from 'components/Landing/Header';
import Sponsors from 'components/Landing/Sponsors';
import Timeline from 'components/Landing/Timeline';
import Offices from 'components/Landing/Offices';
import Footer from 'components/Landing/Footer';

/*  eslint-disable-line react/prefer-stateless-function */
export class Landing extends React.Component {
  static propTypes = {
    fetchTweets: React.PropTypes.func.isRequired,
    fetchEvents: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchTweets();
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <Header />
        <Sponsors />
        <Timeline />
        <Offices />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = selectLanding();
const mapDispatchToProps = {
  fetchEvents,
  fetchTweets,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
