import { observable, action } from 'utils';

export default class uiRoot {
  @observable language = 'en';

  @action setLanguage = (language) => {
    this.language = language;
  }
}
