import React from 'react';
import {Card, CardHeader, CardTitle, CardText, CardActions, FlatButton} from 'material-ui';

export default React.createClass({

  displayName: 'React Item',

  propTypes: {
    event: React.PropTypes.object.isRequired
  },

  getStyles() {
    return {
      cardStyle: {
        marginBottom: 24
      },
      cardTitleStyle: {
        background: '#E0393E',
        fontSize: 38,
        fontWeight: 700
      },
      titleStyle: {
        color: '#fff'
      }
    };
  },

  render() {
    const styles = this.getStyles();
    const event = this.props.event;
    const event_time = new Date(event.time).toLocaleString();
    const event_desc = event.description.substring(3, event.description.length - 4);

    return (
      <Card style={styles.cardStyle}>
        <CardTitle
          style={styles.cardTitleStyle}
          title={<a style={styles.titleStyle} href={event.event_url} >{event.name}</a>}
          subtitle={<span style={styles.titleStyle} >{event_time}</span>} />
        <CardText>
          {event_desc}
        </CardText>
      </Card>
    );
  }
});
