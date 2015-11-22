import React from 'react';
import classNames from 'classnames';

import MUI from 'syncano-material-ui';


export default React.createClass({

  displayName: 'Notification',

  propTypes: {
    style: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired
  },

  mixins: [MUI.Utils.Styles],

  getDefaultProps() {
    return {
      type: 'info'
    };
  },

  getStyles() {
    const styles = {
      fontSize: 18,
      lineHeight: 1,
      color: 'inherit',
      verticalAlign: 'middle'
    };

    return this.mergeAndPrefix(styles, this.props.style);
  },

  render() {
    const styles = this.getStyles();

    const cssClasses = classNames({
      notification: true,
      'notification--info': this.props.type === 'info',
      'notification--error': this.props.type === 'error',
      'notification--warning': this.props.type === 'warning'
    }, this.props.className);

    const iconClass = classNames({
      information: this.props.type === 'info',
      'alert-circle': this.props.type === 'error',
      alert: this.props.type === 'warning'
    });

    return (
      <div className={cssClasses}>
        <div className="notification__content">
          <div className="notification__content__icon">
            <MUI.FontIcon
              style={styles}
              className={`synicon-${iconClass}`} />
          </div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
});
