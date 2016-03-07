import React from 'react';
import Radium from 'radium';
import LeftBar from './LeftBar';
import Declined from './LandingDeclined';
import Success from './LandingSuccess';
import LandingForm from './LandingForm';

export default Radium(React.createClass({
  getInitialState() {
    return {
      registerState: null
    };
  },

  componentDidMount() {
    window.analytics.page();
  },

  getStyles() {
    return {
      componentBody: {
        display: 'flex',
        justifyContent: 'center'
      },
      contentBar: {
        marginLeft: 72,
        '@media (max-width: 750px)': {
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 16
        }
      },
      content: {
        maxWidth: 450,
        fontWeight: 300,
        lineHeight: 1.6,
        textAlign: 'justify',
        fontSize: 16
      },
      headerText: {
        fontSize: 22,
        lineHeight: 1.1,
        marginBottom: 24
      },
      smallText: {
        fontSize: 12,
        lineHeight: 1.8
      },
      mainTextContainer: {
        marginBottom: 10
      },
      emailTextfield: {
        marginBottom: 24
      }
    };
  },

  onFormSubmit(props) {
    this.setState({registerState: props});
  },

  contentForm() {
    const styles = this.getStyles();

    return (
      <div style={styles.content}>
        <div style={styles.mainTextContainer}>
          <div style={styles.headerText}>
            <strong>Hacklag</strong> is a <strong>community</strong> aiming to connect developers, designers,
            entrepreneurs and everyone interested <strong>in new technologies</strong>
            <br/>
            <br/>
            We are also hope to start first <strong>Hackerspace</strong> in <strong>Białystok</strong>
          </div>
          We are <strong>working hard</strong> to make it real. To be part of this initiative
          or just to be <strong>up to date</strong> with the progress please type in your email
          and we will send you an invitation to our <strong>Forum</strong> and <strong>Chat</strong>.
          <br/>
          <br/>
          Demonstrating size and <strong>engagement</strong> of the <strong>community</strong> is
          <strong> extremely</strong> important to gather founds and start operating -
          <strong>please sign up!</strong>
        </div>
        <LandingForm onFormSubmit={this.onFormSubmit} />
        <div style={styles.smallText}>
          On our forum, you can find information for <strong>members, volunteers, partners,
          sponsors</strong>. We are sharing there information about the potential property and the
          whole process of adopting place for <strong>Hacklag</strong>.
        </div>
      </div>
    );
  },

  renderContent() {
    const {registerState} = this.state;

    if (registerState) {
      return <Success/>;
    }

    if (registerState === false) {
      return <Declined/>;
    }

    return this.contentForm();
  },

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        <LeftBar logo="hackbat_general.png" />
        <div style={styles.contentBar}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}));
