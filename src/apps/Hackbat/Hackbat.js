import React from 'react';
import Radium from 'radium';
import HackbatBar from './HackbatBar';

export default Radium(() => {
  const styles = {
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
      lineHeight: '24px',
      textAlign: 'justify',
      fontSize: 18
    }
  };

  return (
      <div style={styles.componentBody}>
        <HackbatBar logo="hackbat_lord.png" />
        <div style={styles.contentBar}>
          <div style={styles.content}>
            I’m HackBat!
            Lord of the Hacklag

            I was born in the darkness. During the day I’m guarding Hacklag and helping it’s members.
            During the night I’m usually coding or playing board games.
            I’m always availabe on Slack and reading every post on Hacklag Forum.
            I’m interested in open source, electronics and building robots. In my spare time I’m reading H. P.
            Lovecraft, watching Star Wars .
            My favorite album is “Dark Side of the Moon”, but I like also jazz and hevy guitar riffs.
            I’m not really into sports… except for flying. I really want to go to Japan some day.
            My favorite quote is:

            “You shall not pass!”
            -- Gandalf

            Meet me on Facebook:
          </div>
        </div>
      </div>
    );
});
