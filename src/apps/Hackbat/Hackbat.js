import React from 'react';
import Radium from 'radium';
import HackbatBar from './HackbatBar';

export default Radium(() => {
  const styles = {
    componentBody: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: 880
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
      fontSize: 18,
      color: '#4A4A4A'
    },
    header: {
      fontSize: 25,
      fontWeight: 600
    },
    subHeader: {
      fontSize: 20,
      fontWeight: 300
    },
    semiBold: {
      fontWeight: 500
    }
  };

  return (
      <div style={styles.componentBody}>
        <HackbatBar logo="hackbat_lord.png" />
        <div style={styles.contentBar}>
          <div style={styles.content}>
            <span style={styles.header}>I’m HackBat!</span>
            <br/>
            <span style={styles.subHeader}>Lord of the Hacklag</span>
            <br/>
            <br/>
            I was born in the <span style={styles.semiBold}>darkness. </span>
            During the day I’m guarding <span style={styles.semiBold}>Hacklag </span>
            and helping it’s members. During the night I’m usually
            <span style={styles.semiBold}> coding </span> or playing
            <span style={styles.semiBold}> board games.</span>
             I’m always availabe on <span style={styles.semiBold}>Slack </span>
            and reading every post on <span style={styles.semiBold}>Hacklag Forum.</span>
            <br/>
            <br/>
            I’m interested in <span style={styles.semiBold}>open source, electronics </span>
            and building <span style={styles.semiBold}>robots</span>. In my spare time I’m reading
            <span style={styles.semiBold}> H. P. Lovecraft, </span>watching
            <span style={styles.semiBold}> Star Wars. </span>
            My favorite album is “<span style={styles.semiBold}>Dark Side of the Moon</span>”,
             but I like also <span style={styles.semiBold}>jazz</span> and
             <span style={styles.semiBold}> hevy guitar</span> riffs.
            I’m not really into sports… except for flying. I really want to go to
            <span style={styles.semiBold}> Japan</span> some day.
            My favorite quote is:
            <br/>
            <br/>
            <span style={styles.semiBold}>“You shall not pass!”</span>
            <br/>
            <span style={styles.semiBold}>-- Gandalf</span>
            <br/>
            <br/>
            Meet me on Facebook:
            <br/>
            <br/>
            <div
              className="fb-like"
              data-href="https://www.facebook.com/HackBat-459675237557073"
              data-width="35"
              data-height="14"
              data-layout="button_count"
              data-show-faces="false" />
          </div>
        </div>
      </div>
    );
});
