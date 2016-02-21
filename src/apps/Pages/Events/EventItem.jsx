import React from 'react';
import {Card, CardHeader, CardTitle, CardText, CardActions, FlatButton} from 'material-ui';

export default React.createClass({

  displayName: 'React Item',

  propTypes: {
    EventItem: React.PropTypes.object.isRequired
  },

  getStyles() {
    return {
      cardStyle: {
        marginBottom: 24
      },
      textStyle: {
        float: 'left'
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
    let styles = this.getStyles();
    let event = this.props.EventItem;

    return (
      <Card style={styles.cardStyle}>
        <CardTitle
          style={styles.cardTitleStyle}
          title={<a style={styles.titleStyle} href={event.event_url} >{event.name}</a>}
          subtitle={<span style={styles.titleStyle} >{new Date(event.time).toLocaleString()}</span>}
        />
        <CardText style={styles.textStyle}>
          {event.description.substring(3, event.description.length - 4)}
        </CardText>
      </Card>
    );
  }
});
