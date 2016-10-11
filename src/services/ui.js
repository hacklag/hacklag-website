import { action } from 'utils';

export default class Data {
  @action toggleModal = (modalName) => {
    this.store.ui.activeModal = this.store.ui.activeModal === modalName ? '' : modalName;
  }

  @action closeModal = () => {
    this.store.ui.activeModal = '';
  }
}
