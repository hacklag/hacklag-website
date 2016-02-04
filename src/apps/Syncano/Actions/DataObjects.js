import Constants from '../../../constants/Constants';

export default {
  list(className) {
    this.Connection
      .DataObjects
      .list(className, {
        page_size: Constants.DATAOBJECTS_PAGE_SIZE,
        order_by: '-created_at'
      })
      .then(this.completed)
      .catch(this.failure);
  },

  subList(payload) {
    this.Connection
      .DataObjects
      .list(payload.className, payload.params)
      .then(this.completed)
      .catch(this.failure);
  },

  create(payload) {
    this.Connection
      .DataObjects
      .create(payload.className, payload.params)
      .then((createdItem) => {
        let promises = payload.fileFields.map((file) => {
          return this.Connection.DataObjects.uploadFile(payload.className, createdItem, file);
        });

        this.D.all(promises)
          .success(this.completed)
          .error(this.failure);
      })
      .catch(this.failure);
  },

  update(payload) {
    this.Connection
      .DataObjects
      .update(payload.className, payload.params)
      .then((updatedItem) => {
        let promises = payload.fileFields.map((file) => {
          return this.Connection.DataObjects.uploadFile(payload.className, updatedItem, file);
        });

        this.D.all(promises)
          .success(this.completed)
          .error(this.failure);
      })
      .catch(this.failure);
  },

  remove(className, dataobjects) {
    let promises = dataobjects.map((dataobject) => this.Connection.DataObjects.remove(className, dataobject));

    this.D.all(promises)
      .success(this.completed)
      .error(this.failure);
  },

  getClass(className) {
    this.Connection
      .Classes
      .get(className)
      .then(this.completed)
      .catch(this.failure);
  }
};
