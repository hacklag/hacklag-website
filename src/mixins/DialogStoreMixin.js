import _ from 'lodash';

export default {

  getInitialState() {
    return this.getInitialDialogState();
  },

  getInitialDialogState() {
    return {
      _dialogMode: 'add',
      _dialogVisible: false
    };
  },

  showDialog(instance, secondInstance) {
    console.debug('DialogStoreMixin::showDialog');
    let state = {_dialogVisible: true};

    if (typeof instance !== 'undefined') {
      state = _.assign(state, instance, {_dialogMode: 'edit'});
    } else if (typeof secondInstance !== 'undefined') {
      state = _.assign(state, {secondInstance});
    }

    this.trigger(state);
  },

  dismissDialog() {
    console.debug('DialogStoreMixin::dismissDialog');
    this.trigger(this.getInitialDialogState());
  }
};
