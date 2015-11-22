import _ from 'lodash';

export default {

  setLoadingStates() {
    if (this.listenables) {
      let arr = [].concat(this.listenables);

      arr.forEach(function(item) {
        this.setLoadingState(item);
      }.bind(this));
    }
  },

  setLoadingState(listenable) {
    _.forEach(listenable, (action) => {
      if (action.asyncResult === true && action.loading === true) {
        this.listenTo(action, this.setToLoading);
        this.listenTo(action.completed, this.setToNotLoading);
        this.listenTo(action.failure, this.setToNotLoading);
      }
    });
  },

  setToLoading() {
    if (this.data.isLoading === true) {
      return;
    }
    console.debug('StoreLoadingMixin::setToLoading');
    this.data.isLoading = true;
    this.trigger(this.data);
  },

  setToNotLoading() {
    if (this.data.isLoading === false) {
      return;
    }
    console.debug('StoreLoadingMixin::setToNotLoading');
    this.data.isLoading = false;
    this.data.hideDialogs = true;
    this.trigger(this.data);
  }

};
