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
        lineHeight: '21px',
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
      explorersClubInv: {
        fontSize: 20,
        lineHeight: '25px',
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
          </div>
          <div style={styles.explorersClubInv}>
            We are happy to invite <span style={styles.semiBold}>Explorers Club </span>
            to <span style={styles.semiBold}>join forces</span> and be a part of
            <span style={styles.semiBold}> Hacklag!</span>
          </div>
          Please <span style={styles.semiBold}>sign up </span>and we will send you an invitation to
           our <span style={styles.semiBold}>Forum</span> and <span style={styles.semiBold}>Chat</span>.
        </div>
        <LandingForm onFormSubmit={this.onFormSubmit} />
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
        <TopBar
          logo="explorerHQ_mobile.png"
          cloud={false} />
        <LeftBar logo="explorerHQ.png" />
        <div style={styles.contentBar}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}));
