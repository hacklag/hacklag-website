export default {
  getDropdown(list, payloadArg, textArg) {
    if (!list) {
      return [{payload: '', text: 'Loading...'}];
    }
    return list.map((item) => {
      return {
        payload: item[payloadArg],
        text: item[textArg]
      };
    });
  },
  getSelectOptions(list, labelArg, valueArg) {
    if (!list) {
      return [];
    }
    return list.map((item) => {
      return {
        label: item[labelArg],
        value: item[valueArg]
      };
    });
  },
  getSelectValuesFromList(list) {
    if (!list) {
      return [];
    }
    return list.map((item) => {
      return {
        label: item,
        value: item
      };
    });
  },
  saveListFromSyncano(obj) {
    return obj._items;
  }
};
