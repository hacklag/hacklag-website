import React from 'react';
import Syncano from 'syncano';
import EventItem from './EventItem';

export default React.createClass({
  displayName: 'Events',

  getInitialState() {
    return {
      events: []
    };
  },

  componentWillMount() {
    const {DataObject} = Syncano({accountKey: SYNCANO_API_KEY});
    const className = 'meetup';

    DataObject.please().list({
      instanceName: SYNCANO_INSTANCE_NAME,
      className
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
    const styles = this.getStyles();
    const {events} = this.state;

    return (
      <div style={styles.componentStyle}>
        {events.map((event) => <EventItem key={event.id} event={event} />)}
      </div>
    );
  }
});
