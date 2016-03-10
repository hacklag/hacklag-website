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
        lineHeight: 1.6,
        textAlign: 'justify',
        fontSize: 16
      },
      headerText: {
        fontSize: 22,
        lineHeight: '25px',
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
          Demonstrating size and <span style={styles.semiBold}>engagement </span>
          of the <span style={styles.semiBold}>community</span> is
          <span style={styles.semiBold}> extremely</span> important to gather funds and start
           operating. If you have your drawer full of undone <span style={styles.semiBold}>tech ideas </span>
          or just want to share knowledge with others, <span style={styles.semiBold}>join us!</span>
          <br/>
          <br/>
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
        <TopBar logo="hackbat_general_mobile.png" />
        <LeftBar logo="hackbat_general.png" />
        <div style={styles.contentBar}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}));
