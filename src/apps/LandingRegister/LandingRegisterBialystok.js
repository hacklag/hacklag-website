import React from 'react';
import Radium from 'radium';
import LeftBar from './LeftBar';
import Declined from './LandingDeclined';
import Success from './LandingSuccess';
import LandingForm from './LandingForm';
import TopBar from './TopBar';

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
        justifyContent: 'center',
        '@media (max-width: 750px)': {
          flexDirection: 'column',
          marginTop: -12
        }
      },
      contentBar: {
        marginLeft: 72,
        '@media (max-width: 750px)': {
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0px 16px 16px 16px'
        }
      },
      content: {
        maxWidth: 450,
        fontWeight: 300,
        lineHeight: '25px',
        textAlign: 'justify',
        fontSize: 16,
        '@media (max-width: 750px)': {
          lineHeight: '22px'
        }
      },
      headerText: {
        fontSize: 22,
        lineHeight: '25px',
        marginBottom: 24,
        '@media (max-width: 750px)': {
          fontSize: 19,
          lineHeight: '24px'
        }
      },
      smallText: {
        fontSize: 12,
        lineHeight: '21px'
      },
      mainTextContainer: {
        marginBottom: 10
      },
      emailTextfield: {
        marginBottom: 24
      },
      semiBold: {
        fontWeight: 500
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
            <span style={styles.semiBold}>Hacklag</span> is an
            <span style={styles.semiBold}> international community </span>
             aiming to connect developers, designers, entrepreneurs
             and everyone interested in <span style={styles.semiBold}>new technologies</span>.
            <br/>
            <br/>
            We also hope to start first <span style={styles.semiBold}>Hackerspace </span>
            in <span style={styles.semiBold}>Białystok</span>
          </div>
          We <span style={styles.semiBold}>working hard</span> to make it real. To be part of this
          <span style={styles.semiBold}> initiative </span>
          or just to be <span style={styles.semiBold}>up to date</span> with the progress, please type in your email
          and we will send you an invitation to our
          <span style={styles.semiBold}> Forum</span> and <span style={styles.semiBold}>Chat</span>.
          <br/>
          <br/>
          Demonstrating size and <span style={styles.semiBold}>engagement </span>
          of the <span style={styles.semiBold}>community</span> is
          <span style={styles.semiBold}> extremely</span> important to gather funds and start
          operating -<span style={styles.semiBold}> please sign up!</span>
        </div>
        <LandingForm onFormSubmit={this.onFormSubmit} />
        <div style={styles.smallText}>
          On our forum you can find information
          about <span style={styles.semiBold}>members, volunteers, partners </span>and
          <span style={styles.semiBold}> sponsors. </span>
          We are sharing information about the whole process of creating the
          <span style={styles.semiBold}> Hacklag Hackerspace</span>.
           Stay tuned for more news and participate in the<span style={styles.semiBold}> Hacklag</span> community.
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
        <TopBar logo="hackbat_bialystok_mobile.png" />
        <LeftBar logo="hackbat_bialystok.png" />
        <div style={styles.contentBar}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}));
