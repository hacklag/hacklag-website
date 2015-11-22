const mixins = {};

const toggleMenuMixin = {
  handleClickOutside() {
    this.clearMenuVisability();
  },

  toggleMenu(name, event) {
    event.stopPropagation();

    let state = {};

    state[name] = !this.state[name];
    this.setState(state);
  },

  clearMenuVisability() {
    let newState = {};

    this.state.toggleArgs.map((item) => {
      newState[item] = false;
    });
    this.setState(newState);
  }
};


const dropdownClickMixin = {
  handleClick(event) {
    this.props.handleClick(this.props.action.name);
    event.stopPropagation();
  }
};

mixins.toggleMenuMixin = toggleMenuMixin;
mixins.dropdownClickMixin = dropdownClickMixin;

export default mixins;
