import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui';

export default (event) => {
  const styles = {
    cardStyle: {
      marginBottom: 24
    },
    cardTitleStyle: {
      background: '#e0393e',
      fontSize: 38,
      fontWeight: 700
    },
    titleStyle: {
      color: '#fff'
    }
  };

  const eventTime = new Date(event.time).toLocaleString();
  const eventDesc = event.description.substring(3, event.description.length - 4);

  return (
    <Card style={styles.cardStyle}>
      <CardTitle
        style={styles.cardTitleStyle}
        title={
            <a
              style={styles.titleStyle}
              href={event.event_url}>
                {event.name}
            </a>
        }
        subtitle={
            <span style={styles.titleStyle}>
              {eventTime}
            </span>
        } />
      <CardText>
        {eventDesc}
      </CardText>
    </Card>
  );
};
