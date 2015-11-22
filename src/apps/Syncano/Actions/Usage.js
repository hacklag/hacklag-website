export default {
  listDailyUsage(params) {
    this.Connection
      .Usage
      .getDaily(params)
      .then(this.completed)
      .catch(this.failure);
  },

  listHourlyUsage(params) {
    this.Connection
      .Usage
      .getHourly(params)
      .then(this.completed)
      .catch(this.failure);
  },

  listTotalDailyUsage(params = {}) {
    params.total = true;

    this.Connection
      .Usage
      .getDaily(params)
      .then(this.completed)
      .catch(this.failure);
  },

  listTotalHourlyUsage(params = {}) {
    params.total = true;

    this.Connection
      .Usage
      .getHourly(params)
      .then(this.completed)
      .catch(this.failure);
  }
};
