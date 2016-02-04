export default {
  create(payload) {
    this.Connection
      .DataViews
      .create(payload)
      .then(this.completed)
      .catch(this.failure);
  },

  list() {
    this.Connection
      .DataViews
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  update(id, payload) {
    this.Connection
      .DataViews
      .update(id, payload)
      .then(this.completed)
      .catch(this.failure);
  },

  remove(dataviews) {
    let promises = dataviews.map((dataview) => this.Connection.DataViews.remove(dataview.name));

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  }
};
