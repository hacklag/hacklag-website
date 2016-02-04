export default {
  headerMenuItems() {
    let params = {
      instanceName: this.getParams().instanceName
    };

    return [
      {
        label: 'Data',
        route: 'data',
        params
      },
      {
        label: 'Classes',
        route: 'classes',
        params
      },
      {
        label: 'Users',
        route: 'users',
        params
      },
      {
        label: 'CodeBoxes',
        route: 'codeboxes',
        params
      },
      {
        label: 'Channels',
        route: 'channels',
        params
      },
      {
        label: 'Tasks',
        route: 'tasks',
        params
      }
    ];
  }
};
