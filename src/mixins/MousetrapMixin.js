import Mousetrap from 'mousetrap';

export default {
  mousetrapBindings: [],

  bindShortcut(key, callback) {
    Mousetrap.bind(key, callback);

    this.mousetrapBindings.push(key);
  },

  unbindShortcut(key) {
    let index = this.mousetrapBindings.indexOf(key);

    if (index > -1) {
      this.mousetrapBindings.splice(index, 1);
    }

    Mousetrap.unbind(key);
  },

  unbindAllShortcuts() {
    if (this.mousetrapBindings.length < 1) {
      return;
    }

    this.mousetrapBindings.forEach((binding) => Mousetrap.unbind(binding));
  },

  componentWillUnmount() {
    this.unbindAllShortcuts();
  }
};
