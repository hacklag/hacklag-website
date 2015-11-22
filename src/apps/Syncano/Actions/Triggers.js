export default {
  create(payload) {
    this.Connection
      .Triggers
      .create(payload)
      .then(this.completed)
      .catch(this.failure);
  },

  get(triggerId) {
    this.Connection
      .Triggers
      .get(triggerId)
      .then(this.completed)
      .catch(this.failure);
  },

  list() {
    this.Connection
      .Triggers
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  update(id, payload) {
    this.Connection
      .Triggers
      .update(id, payload)
      .then(this.completed)
      .catch(this.failure);
  },

  remove(ids) {
    let promises = ids.map((id) => this.Connection.Triggers.remove(id));

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  },

  listTraces(triggerId) {
    this.Connection
      .Triggers
      .traces(triggerId)
      .then(this.completed)
      .catch(this.failure);
  }
};
