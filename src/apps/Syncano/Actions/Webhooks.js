export default {
  get(webhookName) {
    this.Connection
      .WebHooks
      .get(webhookName)
      .then(this.completed)
      .catch(this.failure);
  },

  create(payload) {
    this.Connection
      .WebHooks
      .create(payload)
      .then(this.completed)
      .catch(this.failure);
  },

  list() {
    this.Connection
      .WebHooks
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  update(id, payload) {
    this.Connection
      .WebHooks
      .update(id, payload)
      .then(this.completed)
      .catch(this.failure);
  },

  remove(ids) {
    let promises = ids.map((id) => this.Connection.WebHooks.remove(id));

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  },

  listTraces(webhookId) {
    this.Connection
      .WebHooks
      .traces(webhookId)
      .then(this.completed)
      .catch(this.failure);
  }
};
