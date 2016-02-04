import React from 'react';

export default {
  getDialogs() {
    let dialogs = this.initDialogs();

    return dialogs.map((dialog) => {
      return React.createElement(dialog.dialog, dialog.params);
    });
  },

  showDialog(ref) {
    this.refs[ref].show();
  },

  getDialogListLength(items) {
    return items.length;
  },

  getDialogList(items, paramName, associationFor) {
    let listItems = items.map((item) => {
      let isAssociated = (item.triggers && item.triggers.length > 0) || (item.schedules && item.schedules.length > 0);
      let triggersAssociation = item.triggers ? ` (${item.triggers.join(', ')})` : '';
      let schedulesAssociation = item.schedules ? ` (${item.schedules.join(', ')})` : '';
      let association = '';

      if (isAssociated && associationFor === 'triggers') {
        association = triggersAssociation;
      }

      if (isAssociated && associationFor === 'schedules') {
        association = schedulesAssociation;
      }

      return <li>{item[paramName || 'name'] + association}</li>;
    });

    return <ul>{listItems}</ul>;
  },

  hideDialogs(hideDialogsFlag) {
    if (hideDialogsFlag) {
      return this.initDialogs().map((dialogConf) => {
        if (this.refs[dialogConf.params.ref]) {
          this.refs[dialogConf.params.ref].dismiss();
        }
      });
    }
  },

  showMenuDialog(itemName, handleConfirm, event) {
    if (!this.refs.menuDialog) {
      throw new Error("'menuDialog' ref not found. Please define dialog with 'menuDialog' ref.");
    }
    this.refs.menuDialog.show(itemName, handleConfirm, event.target.innerHTML);
  }
};

