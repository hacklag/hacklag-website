export default {
  create(payload) {
    this.Connection
      .Schedules
      .create(payload)
      .then(this.completed)
      .catch(this.failure);
  },

  get(scheduleId) {
    this.Connection
      .Schedules
      .get(scheduleId)
      .then(this.completed)
      .catch(this.failure);
  },

  list() {
    this.Connection
      .Schedules
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  update(id, payload) {
    this.Connection
      .Schedules
      .update(id, payload)
      .then(this.completed)
      .catch(this.failure);
  },

  remove(schedules) {
    let promises = schedules.map((schedule) => {
      return this.Connection.Schedules.remove(schedule.id);
    });

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  },

  listTraces(scheduleId) {
    this.Connection
      .Schedules
      .traces(scheduleId)
      .then(this.completed)
      .catch(this.failure);
  }
};
