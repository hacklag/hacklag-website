import { computed } from 'utils';

export default class userRoot {
  @computed get helloMessage() {
    return {
      en: 'Hello',
      pl: 'Cześć',
    }[this.roots.uiRoot.language];
  }
}
