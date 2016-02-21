import React from 'react';
import Syncano from 'syncano';
import EventItem from './EventItem';

export default React.createClass({

  displayName: 'Calendar',

  getInitialState() {
    return {
      events: []
    };
  },

  componentDidMount() {
    const {DataObject} = Syncano({accountKey: SYNCANO_API_KEY});

    DataObject.please().list({
      instanceName: SYNCANO_MEETUP_INSTANCE_NAME,
      className: 'meetup'
    }).then((dataobjects) => {
      this.setState({
        events: JSON.parse(dataobjects[0].events).results
      });
    });
  },

  getStyles() {
    return {
      componentStyle: {
        backgroundColor: '#f5f8f9'
      }
    };
  },

  render() {
    let styles = this.getStyles();
    let events = [];

    for (let event of this.state.events) {
      events.push(
        <EventItem key={event.id} EventItem={event}/>
      );
    }

    return (
      <div style={styles.componentStyle}>
        {events}
      </div>
    );
  }
});
