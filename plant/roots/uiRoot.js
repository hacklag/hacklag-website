import { observable, action } from 'utils';

export default class uiRoot {
  @observable activeModal = '';

  @action toggleModal = (modalName) => {
    this.activeModal = this.activeModal === modalName ? '' : modalName;
  }

  @action closeModal = () => {
    this.activeModal = '';
  }
}
