import React from 'react';
import Radium from 'radium';

const landingReinvited = Radium((props) => {
  const styles = {
    content: {
      maxWidth: 450,
      fontWeight: 400,
      lineHeight: 1.6,
      textAlign: 'justify',
      fontSize: 20,
      marginBottom: 24
    },
    headlineText: {
      fontSize: 20,
      fontWeight: 400
    }
  };

  return (
      <div style={styles.content}>
        <span style={styles.headlineText}>Looks like you have been <strong>invited before</strong>.</span>
        <br />
        <br />
        Check your mailbox for invitation, send date:
        <br />
        <strong>{props.sendDate}</strong>
        <br />
        <br />
      </div>
    );
});

landingReinvited.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default landingReinvited;
