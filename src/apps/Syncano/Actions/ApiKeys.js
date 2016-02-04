import D from 'd.js';

export default {
  list() {
    this.Connection
      .ApiKeys
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  create(payload) {
    this.Connection
      .ApiKeys
      .create({
        description: payload.description,
        allow_user_create: payload.allow_user_create,
        ignore_acl: payload.ignore_acl
      })
      .then(this.completed)
      .catch(this.failure);
  },

  update(name, payload) {
    this.Connection
      .ApiKeys
      .update(name, payload)
      .then(this.completed)
      .catch(this.failure);
  },

  remove(names) {
    names.map((name) => {
      this.Connection
        .ApiKeys
        .remove(name)
        .then(this.completed)
        .catch(this.failure);
    });
  },

  reset(apiKeys) {
    let promises = apiKeys.map((apiKey) => this.Connection.ApiKeys.reset(apiKey.id));

    D.all(promises)
      .success(this.completed)
      .error(this.failure);
  }
};
