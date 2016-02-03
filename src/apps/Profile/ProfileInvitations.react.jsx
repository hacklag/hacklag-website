import React from 'react';
import Reflux from 'reflux';

// Utils
import Mixins from '../../mixins';

// Stores and Actions
import Actions from './ProfileInvitationsActions';
import Store from './ProfileInvitationsStore';

// Components
import MUI from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Common from '../../common';
import Container from '../../common/Container/Container.react';
import EmptyContainer from '../../common/Container/EmptyContainer.react';

let Column = Common.ColumnList.Column;

export default React.createClass({

  displayName: 'ProfileInvitations',

  mixins: [
    Reflux.connect(Store),
    Mixins.Dialogs
  ],

  componentDidMount() {
    console.info('ProfileInvitations::componentDidMount');
    Actions.fetch();
  },

  componentWillUpdate(nextProps, nextState) {
    console.info('ProfileInvitations::componentWillUpdate');
    this.hideDialogs(nextState.hideDialogs);
  },

  handleAccept() {
    console.info('ProfileInvitations::handleAccept');
    Actions.acceptInvitations(Store.getCheckedItems());
  },

  handleDecline() {
    console.info('ProfileInvitations::handleDecline');
    Actions.declineInvitations(Store.getCheckedItems());
  },

  initDialogs() {
    let checked = Store.getCheckedItems().length;

    return [
      {
        dialog: Common.Dialog,
        params: {
          ref: 'acceptInvitationsDialog',
          title: 'Accept Invitation',
          actions: [
            {text: 'Cancel', onClick: this.handleCancel},
            {text: 'Yes, I\'m sure.', onClick: this.handleAccept}
          ],
          modal: true,
          children: 'Do you really want to accept ' + checked + ' Invitations?'
        }
      },
      {
        dialog: Common.Dialog,
        params: {
          ref: 'declineInvitationsDialog',
          title: 'Decline Invitation',
          actions: [
            {text: 'Cancel', onClick: this.handleCancel},
            {text: 'Yes, I\'m sure.', onClick: this.handleDecline}
          ],
          modal: true,
          children: 'Do you really want to decline ' + checked + ' Invitations?'
        }
      }
    ];
  },

  uncheckAll() {
    console.info('ProfileInvitations::uncheckAll');
    Actions.uncheckAll();
  },

  checkItem(id, state) {
    console.info('ProfileInvitations::checkItem');
    Actions.checkItem(id, state);
  },

  renderItem(item) {
    return (
      <Common.ColumnList.Item
        checked={item.checked}
        key={item.id}>
        <Column.CheckIcon
          id={item.id.toString()}
          icon='account'
          background={MUI.Styles.Colors.blue500}
          checked={item.checked}
          handleIconClick={this.checkItem}>
          {item.instance}
        </Column.CheckIcon>
        <Column.Desc>{item.inviter}</Column.Desc>
        <Column.Desc>{item.role}</Column.Desc>
        <Column.Date date={item.created_at}/>
        <Column.Menu>
          <MenuItem
            className="dropdown-item-invitation-accept"
            onTouchTap={this.showMenuDialog.bind(null, item.inviter, Actions.acceptInvitations.bind(null, [item]))}
            primaryText="Accept Invitation" />
          <MenuItem
            className="dropdown-item-invitation-decline"
            onTouchTap={this.showMenuDialog.bind(null, item.inviter, Actions.declineInvitations.bind(null, [item]))}
            primaryText="Decline Invitation" />
        </Column.Menu>
      </Common.ColumnList.Item>
    );
  },

  renderList() {
    let items = this.state.items.map((item) => this.renderItem(item));

    if (items.length > 0) {
      items.reverse();
      return items;
    }
  },

  render() {
    let checkedInvitations = Store.getNumberOfChecked();

    return (
      <Container>
        <Column.MenuDialog ref="menuDialog"/>
        {this.getDialogs()}

        <Common.Show if={checkedInvitations > 0}>
          <Common.Fab position="top">
            <Common.Fab.TooltipItem
              tooltip="Click here to unselect all"
              mini={true}
              onClick={this.uncheckAll}
              iconClassName="synicon-checkbox-multiple-marked-outline"/>
            <Common.Fab.TooltipItem
              tooltip="Click here to accept Invitations"
              mini={true}
              onClick={this.showDialog.bind(null, 'acceptInvitationsDialog')}
              iconClassName="synicon-check"/>
            <Common.Fab.TooltipItem
              tooltip="Click here to decline Invitations"
              mini={true}
              onClick={this.showDialog.bind(null, 'declineInvitationsDialog')}
              iconClassName="synicon-delete"/>
          </Common.Fab>
        </Common.Show>

        <Common.Loading show={this.state.isLoading}>
          <Common.Show if={this.state.items.length < 1}>
            <EmptyContainer
              icon='synicon-email-outline'
              text='You have no invitations'/>
          </Common.Show>

          <Common.Show if={this.state.items.length > 0}>
            <Common.Lists.Container>
              <Common.ColumnList.Header>
                <Column.ColumnHeader
                  primary={true}
                  columnName="CHECK_ICON">
                  Instance
                </Column.ColumnHeader>
                <Column.ColumnHeader columnName="DESC">From</Column.ColumnHeader>
                <Column.ColumnHeader columnName="DESC">Role</Column.ColumnHeader>
                <Column.ColumnHeader columnName="DATE">Created</Column.ColumnHeader>
                <Column.ColumnHeader columnName="MENU"/>
              </Common.ColumnList.Header>
              <Common.Lists.List>
                {this.renderList()}
              </Common.Lists.List>
            </Common.Lists.Container>
          </Common.Show>
        </Common.Loading>
      </Container>
    );
  }

});
