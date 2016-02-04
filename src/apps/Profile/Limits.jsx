import React from 'react';
import Show from '../../common/Show/Show.react';

export default React.createClass({

  displayName: 'Limits',

  render() {
    return (
      <div className="row">
        <div className="col-md-9" style={{whiteSpace: 'nowrap'}}>
          <div>API calls</div>
          <div>CodeBox runs</div>
        </div>
        <div className="col-md-9" style={{textAlign: 'right'}}>
          <div><strong>{parseInt(this.props.data.api.included, 10).toLocaleString()}/month</strong></div>
          <div><strong>{parseInt(this.props.data.cbx.included, 10).toLocaleString()}/month</strong></div>
        </div>

        <Show if={this.props.data.api.overage && this.props.data.cbx.overage}>
          <div className="col-md-8" style={{textAlign: 'right', whiteSpace: 'nowrap'}}>
            <div>+{this.props.data.api.overage}</div>
            <div>+{this.props.data.cbx.overage}</div>
          </div>
        </Show>
        <Show if={this.props.data.api.overage && this.props.data.cbx.overage}>
          <div className="col-md-9" style={{paddingLeft: 3}}>
            <div style={{whiteSpace: 'nowrap'}}>per extra call</div>
            <div style={{whiteSpace: 'nowrap'}}>per extra run</div>
          </div>
        </Show>
      </div>
    );
  }
});
