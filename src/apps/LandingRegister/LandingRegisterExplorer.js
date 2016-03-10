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
      },
      explorersClubInv: {
        fontSize: 20,
        lineHeight: '25px'
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
          </div>
          <div style={styles.explorersClubInv}>
            We are happy to invite Explorers Club to join forces and be a part of Hacklag!
            <br/>
            <br/>
          </div>
          Please <strong>sign up </strong>and we will send you an invitation to
           our <strong>Forum</strong> and <strong>Chat</strong>.
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
