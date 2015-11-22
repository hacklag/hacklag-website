import _ from 'lodash';

export default {
  list() {
    this.Connection
      .Users
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  create(payload, groups) {
    let userGroups = groups.newGroups ? groups.newGroups : null;
    let userGroupsArray = _.isArray(userGroups) ? userGroups : [userGroups];

    if (userGroups) {
      this.Connection
        .Users
        .create(payload)
        .then((user) => {
          let addUserToGroups = userGroupsArray.map((group) => this.Connection.Users.addToGroup(user.id, group.id));

          this.D.all(addUserToGroups)
            .success(this.completed)
            .error(this.failure);
        })
        .catch(this.failure);
    } else {
      this.Connection
        .Users
        .create(payload)
        .then(this.completed)
        .catch(this.failure);
    }
  },

  update(id, payload, groups) {
    this.Connection
      .Users
      .update(id, payload)
      .success(() => {
        let groupsId = groups.groups.map((group) => group.id);
        let newGroupsId = groups.newGroups.map((group) => group.id);
        let addedGroups = _.difference(newGroupsId, groupsId);
        let removedGroups = _.difference(groupsId, newGroupsId);
        let addUserToGroups = addedGroups.map((group) => this.Connection.Users.addToGroup(id, group));
        let removeUserFromGroups = removedGroups.map((group) => this.Connection.Users.removeFromGroup(id, group));
        let promises = removeUserFromGroups.concat(addUserToGroups);

        this.D.all(promises)
          .success(this.completed)
          .error(this.failure);
      })
      .error(this.failure);
  },

  remove(users) {
    let promises = users.map((user) => this.Connection.Users.remove(user.id));

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  },

  addToGroup(user, group) {
    this.Connection
      .Users
      .addToGroup(user, group)
      .then(this.completed)
      .catch(this.failure);
  },

  removeFromGroup(user, group) {
    this.Connection
      .Users
      .removeFromGroup(user, group)
      .then(this.completed)
      .catch(this.failure);
  },

  listUserGroups(user) {
    this.Connection
      .Users
      .getUserGroups(user)
      .then(this.completed)
      .catch(this.failure);
  }
};
