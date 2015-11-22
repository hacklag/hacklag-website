export default {
  get(codeboxId) {
    this.Connection
      .CodeBoxes
      .get(codeboxId)
      .then(this.completed)
      .catch(this.failure);
  },

  update(codeboxId, params) {
    this.Connection
      .CodeBoxes.update(codeboxId, params)
      .then(this.completed)
      .catch(this.failure);
  },

  run(params) {
    this.Connection
      .CodeBoxes.run(params.id, {payload: params.payload})
      .then(this.completed)
      .catch(this.failure);
  },

  runWithUpdate(codeboxId, updateParams, payload) {
    this.Connection
      .CodeBoxes.update(codeboxId, updateParams)
      .then(
      this.Connection
        .CodeBoxes
        .run(codeboxId, payload)
        .then(this.completed)
        .catch(this.failure)
    )
    .catch(this.failure);
  },

  list() {
    this.Connection
      .CodeBoxes
      .list()
      .then(this.completed)
      .catch(this.failure);
  },

  create(payload) {
    this.Connection
      .CodeBoxes.create({
        runtime_name: payload.runtime_name,
        label: payload.label,
        description: payload.description,
        source: '# Start coding!'
      })
      .then(this.completed)
      .catch(this.failure);
  },

  remove(ids) {
    let promises = ids.map((id) => this.Connection.CodeBoxes.remove(id));

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  },

  getTrace(codeboxId, traceId) {
    this.Connection
      .CodeBoxes.trace(traceId, codeboxId, {})
      .then(this.completed)
      .catch(this.failure);
  },

  listTraces(codeboxId) {
    this.Connection
      .CodeBoxes.traces(codeboxId, {})
      .then(this.completed)
      .catch(this.failure);
  },

  listRuntimes() {
    this.Connection
      .CodeBoxes.listRuntimes()
      .then(this.completed)
      .catch(this.failure);
  }
};
