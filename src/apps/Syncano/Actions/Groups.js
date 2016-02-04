export default {
  create(label) {
    this.Connection
      .Groups
      .create(label)
      .then(this.completed)
      .catch(this.failure);
  },

  list() {
    this.Connection
      .Groups
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  update(id, payload) {
    this.Connection
      .Groups
      .update(id, payload)
      .then(this.completed)
      .catch(this.failure);
  },

  remove(ids) {
    let promises = ids.map((id) => this.Connection.Groups.remove(id));

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  },

  listUsers(groupId) {
    this.Connection
      .Groups
      .getUsers(groupId)
      .then(this.completed)
      .catch(this.failure);
  }
};
