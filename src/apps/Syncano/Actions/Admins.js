export default {
  list() {
    this.Connection
      .Admins
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  update(name, payload) {
    this.Connection
      .Admins
      .update(name, payload)
      .then(this.completed)
      .catch(this.failure);
  },

  remove(admins) {
    let promises = admins.map((admin) => this.Connection.Admins.remove(admin));

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  }
};
