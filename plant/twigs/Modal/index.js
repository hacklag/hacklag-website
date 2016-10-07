import React, { Component, PropTypes } from 'react';
import { connect, observer } from 'utils';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

@observer
@connect(({ uiRoot }) => ({
  activeModal: uiRoot.activeModal,
  toggleModal: uiRoot.toggleModal.bind(uiRoot),
  closeModal: uiRoot.closeModal.bind(uiRoot),
}))
export default class Modal extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    isBare: PropTypes.bool,
    activeModal: PropTypes.string,
    children: PropTypes.node,
    toggleModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === 27) this.props.closeModal();
  }

  render() {
    const { children, activeModal, name, toggleModal, closeModal, title, isBare = false } = this.props;
    const isVisible = name === activeModal;

    return (
      <div className={cx('Modal', { isVisible }, this.props.className)}>
        <div className={cx('Modal__bg')} onClick={() => toggleModal(name)}></div>
        <div className={cx(isBare ? null : 'Modal__content')}>
          {title && <h2 className={cx('Modal__title')}>{title}</h2>}
          <div className={cx('Modal__closeBtn', 'fa fa-times-circle')} onClick={() => closeModal()}></div>
          {isVisible ? children : null}
        </div>
      </div>
    );
  }
}
